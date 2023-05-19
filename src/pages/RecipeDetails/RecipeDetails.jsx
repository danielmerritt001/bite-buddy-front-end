// npm modules
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//component
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

// services
import * as recipeService from '../../services/recipeService'
import * as profileService from '../../services/profileService'
import * as boardService from '../../services/boardService'

//css
import styles from './RecipeDetails.module.css'

const RecipeDetails = (props) => {
  const healthArray = ['Dairy-Free', 'Egg-Free', 'Gluten-Free', 'Kosher', 'Peanut-Free', 'Shellfish-Free', 'Soy-Free', 'Tree-Nut-Free', 'Vegan', 'Vegetarian']
  const navigate = useNavigate()
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [recipeComments, setRecipeComments] = useState([])
  const [formData, setFormData] = useState({
    boardId: '',
    foodId: recipeId,
    label: '',
  })

  const profileId = props.user.profile
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeCommentsData = await recipeService.showRecipeComments(recipeId)
      const apiRecipeData = await recipeService.show(recipeId)
      if (recipeCommentsData) setRecipeComments(recipeCommentsData.comments)
      setRecipe(apiRecipeData)
    }
    fetchRecipe()
  }, [recipeId])

  const handleAddToBoard = async (formData) => {
    const recipeObj = await boardService.addRecipeToBoard(formData)
    return recipeObj
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value, label: recipe.recipe.label})
    //delete me at your leisure. but before 11:30AM
    console.log(formData)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddToBoard(formData)
    navigate(`/boards/${formData.boardId}`)
  }

  const handleAddComment = async (commentFormData) => {
    const newComment = await recipeService.createComment(recipeId, commentFormData)
    setRecipeComments([newComment, ...recipeComments])
  }

  const handleDeleteComment = async (recipeId, commentId) => {
    await recipeService.deleteComment(recipeId, commentId)
    setRecipeComments(recipeComments.filter((comment) => comment._id !== commentId))
  }

  if (recipe && profile) {
    const recipeDetails = recipe.recipe
    //Delete
    console.log(recipeDetails)
    const recipeHealthLabels = healthArray.filter(elem => (
      recipeDetails.healthLabels.includes(elem)
    ))
    // Delete me too. Do this one by 
    console.log(recipeHealthLabels)
    return (
      <main className={`${styles.container} ${styles.main}`}>
        <h2>{recipeDetails.label}</h2>
        <h3>By: {recipeDetails.source}</h3>
        <h5>rating placeholder</h5>
        <div className={`${styles.photoAndNutrition}`}>
          <img src={recipeDetails.image} alt={recipeDetails.label} />
          <div>Nutrition per Serving:
            <div>Calories: {Math.floor(recipeDetails.calories / recipeDetails.yield)}</div>
            <div>Fat: {Math.floor(recipeDetails.totalNutrients.FAT.quantity / recipeDetails.yield)} g</div>
            <div>Carbs: {Math.floor(recipeDetails.totalNutrients.CHOCDF.quantity / recipeDetails.yield)} g</div>
            <div>Protein: {Math.floor(recipeDetails.totalNutrients.PROCNT.quantity / recipeDetails.yield)} g</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="addToBoard-input">Add To Board
            <select
              required
              name='boardId'
              id='add-to-board-input'
              value={formData.boardId}
              onChange={handleChange}>
              <option value="">---</option>
              {profile.boards.map(board => (
                <option key={board._id} value={board._id}>{board.title}</option>
              ))}
            </select>
          </label>
          <button type='submit'>Add</button>
        </form>
        <div>Yields {recipeDetails.yield} Servings</div>
        <div>
          {recipeHealthLabels.map(label => (
            <div key={label}>{label}</div>
          ))}
        </div>
        <div>{recipeDetails.mealType}</div>
        <div>Cuisine Type: {recipeDetails.cuisineType}</div>
        <ul>
          {recipeDetails.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient.text}</li>
          ))}
        </ul>
        <a href={recipeDetails.url} target='_blank' rel="noreferrer">Full Recipe Here</a>
        <NewComment recipe={recipeDetails} comments={recipeComments} handleAddComment={handleAddComment} />
        <Comments
          recipeId={recipeId}
          comments={recipeComments}
          user={props.user}
          handleDeleteComment={handleDeleteComment}
        />
      </main>
    )
  }
}

export default RecipeDetails