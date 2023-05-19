// npm modules
import { Link } from 'react-router-dom'

//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipe
  if (!(recipe.foodId)) {
    recipe.foodId = recipe.uri.split('recipe_')[1]
  }
  return (
    <>
      <div className={`${styles.recipecardcontainer}`}>
        <Link to={`/recipes/${recipe.foodId}`} >
          <article className={styles.container}>
            <div>
              <img src={recipe.image} alt={recipe.label} />
            </div>
            <div className={`${styles.recipelabel}`}>
              {recipe.label}
            </div>
            <div>
              {recipe.source}
            </div>
          </article>
        </Link>
      </div>
    </>
  )
}

export default RecipeCard