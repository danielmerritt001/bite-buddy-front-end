// npm modules
import { Link } from 'react-router-dom'

//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipe
  const foodId = recipe.uri.split('recipe_')[1]
  console.log(foodId)
  return (
    <Link to={`/recipes/${foodId}`} >
      <article className={styles.container}>
        <div>
          <img src={recipe.images.SMALL.url} alt={recipe.label} />
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