// npm modules
import { Link } from 'react-router-dom'

//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipe
  if(!(recipe.foodId)){

    recipe.foodId = recipe.uri.split('recipe_')[1]
  }
  return (
    <Link to={`/recipes/${recipe.foodId}`} >
      <article className={styles.container}>
        <div>
          <img src={recipe.image} alt={recipe.label} />
        </div>
        <div>
          {recipe.label}
        </div>
        <div>
          {recipe.source}
        </div>
      </article>
    </Link>
    )
}

export default RecipeCard

//use get recipe function to do what we want to
//pass recipe id through each level