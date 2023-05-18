// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

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
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [recipeComments, setRecipeComments] = useState([])
  const [formData, setFormData ] = useState({
    boardId: '',
    foodId: recipeId,
  })

  const  profileId  = props.user.profile
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
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    console.log(formData)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
		handleAddToBoard(formData)
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
      console.log(props)
    const recipeDetails = recipe.recipe
    return (
      <main className={`${styles.container} ${styles.main}`}>
        <h2>{recipeDetails.label}</h2>
        <h3>By: {recipeDetails.source}</h3>
        <h5>rating placeholder</h5>
        <img src={recipeDetails.image} alt={recipeDetails.label} />

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
              )
              )}
            </select>
          </label>
          <button type='submit'>Add</button>
        </form>

        <div>nutrition placeholder</div>
        <div>health labels</div>
        <div>{recipeDetails.mealType}</div>
        <div>Cuisine Type: {recipeDetails.cuisineType}</div>
        <div>Estimated Time: {recipeDetails.totalTime} hours</div>
        <div>Yields {recipeDetails.yield}</div>
        <ul>
        {recipeDetails.ingredients.map((ingredient,idx) => (
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