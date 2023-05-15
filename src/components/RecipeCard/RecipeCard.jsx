//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipeSingle.recipe
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
    </article>
    )
}

export default RecipeCard

// map recipes
// map goes to card and passes recipe 
// deconstruct recipe to be recipe 