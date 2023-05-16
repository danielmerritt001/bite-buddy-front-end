// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

//component
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

// services
import * as recipeService from '../../services/recipeService'

//css
import styles from './RecipeDetails.module.css'


const RecipeDetails = (props) => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)
  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await recipeService.show(recipeId)
      setRecipe(recipeData)
    }
    fetchRecipe()
  }, [recipeId])
if(recipe) {
  const recipeDetails = recipe.recipe
  return (  
    <main className={`${styles.container} ${styles.main}`}>
      <h2>{recipeDetails.label}</h2>
      <h3>By: {recipeDetails.source}</h3>
      <h5>rating placeholder</h5>
      <img src={recipeDetails.image} alt={recipeDetails.label} />
      <div>nutrion placeholder</div>
      <div>health labels</div>
      <div>{recipeDetails.mealType}</div>
      <div>{recipeDetails.cuisineType}</div>
      <div>{recipeDetails.totalTime} hours</div>
      <div>ingredients placeholder</div>
      <div>url link</div>

      <Comments />
      <NewComment />
    </main>
  )
}
}
export default RecipeDetails