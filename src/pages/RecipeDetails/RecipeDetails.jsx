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
    const recipeId = recipe.recipe.uri.split('recipe_')[1]
    const recipeObj = await boardService.addRecipeToBoard({ ...formData, foodId: recipeId })
    return recipeObj
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value, label: recipe.recipe.label })
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
    const recipeHealthLabels = healthArray.filter(elem => (
      recipeDetails.healthLabels.includes(elem)
    ))
    return (
      <main className={`${styles.container} ${styles.main}`}>
        <h1>{recipeDetails.label}</h1>
        <h4>By: {recipeDetails.source}</h4>
        <div className={`${styles.photoAndNutrition}`}>
          <div className={`${styles.empty}`}></div>
          <img src={recipeDetails.image} alt={recipeDetails.label} />
          <div className={`${styles.right}`}>
            <div className={`${styles.yield}`}>Yields {recipeDetails.yield} Servings</div>
            <div className={`${styles.nutrition}`}>Nutrition per Serving:
              <div>Calories: {Math.floor(recipeDetails.calories / recipeDetails.yield)}</div>
              <div>Fat: {Math.floor(recipeDetails.totalNutrients.FAT.quantity / recipeDetails.yield)} g</div>
              <div>Carbs: {Math.floor(recipeDetails.totalNutrients.CHOCDF.quantity / recipeDetails.yield)} g</div>
              <div>Protein: {Math.floor(recipeDetails.totalNutrients.PROCNT.quantity / recipeDetails.yield)} g</div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.form}`}>
          <label
            htmlFor="addToBoard-input">Add To Board
            <select
              required
              name='boardId'
              id='add-to-board-input'
              value={formData.boardId}
              onChange={handleChange}
              className={`${styles.addtoboard}`}>
              <option value="">---</option>
              {profile.boards.map(board => (
                <option key={board._id} value={board._id}>{board.title}</option>
              ))}
            </select>
          </label>
          <button type='submit'>Add</button>
        </form>
        <div className={`${styles.labelsList}`}>
          {recipeHealthLabels.map(label => (
            <div key={label} className={`${styles.healthLabel}`}>{label}</div>
          ))}
        </div>
        <div className={`${styles.type}`}>
          <div>Meal Type: {recipeDetails.mealType}</div>
          <div>Cuisine Type: {recipeDetails.cuisineType}</div>
        </div>
        <div className={`${styles.ingredients}`}>
          {recipeDetails.ingredients.map((ingredient, idx) => (
            <div key={idx} className={`${styles.ingredient}`}>{ingredient.text}</div>
          ))}
        </div>
        <div className={`${styles.recipe}`}>
          <a href={recipeDetails.url} target='_blank' rel="noreferrer" >Full Recipe Here</a>
        </div>
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