//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'

//css
import styles from './RecipeList.module.css'

const RecipeList = ( props ) => {
  const recipes = props.recipes.hits
  console.log(props.recipes.hits)
  if (recipes) {
    return(
      <main className={`${styles.container} ${styles.main}`}>
      {recipes.map(recipeSingle => (
        <RecipeCard key={recipeSingle._id} recipe={recipeSingle.recipe} />
      ))}
    </main>
    )
  } else {
    <h1>IM STILL GETTING READY!!!</h1>
  }
}
export default RecipeList

// map recipes
// map goes to card and passes recipe 
// deconstruct recipe to be recipe 
