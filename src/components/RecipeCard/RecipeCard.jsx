//css
import styles from './RecipeCard.module.css'

const RecipeCard = (props) => {
  const recipe = props.recipeSingle.recipe
  console.log(recipe)
  return (
    <article className={styles.container}>
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