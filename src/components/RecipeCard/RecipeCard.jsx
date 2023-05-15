//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipe
  console.log(recipe)
  console.log(recipe.images.SMALL.url)
  return (
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
    )
}

export default RecipeCard

//use get recipe function to do what we want to
//pass recipe id through each level