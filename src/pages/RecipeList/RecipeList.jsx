//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'

//css
import styles from './RecipeList.module.css'

const RecipeList = (props) => {
  return(
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the recipe list</h1>
      <RecipeCard />
    </main>
  )
}
export default RecipeList