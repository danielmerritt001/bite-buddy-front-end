//component
import Comments from "../../components/Comments/Comments"
import NewComment from "../../components/NewComment/NewComment"

//css
import styles from './RecipeDetails.module.css'

const RecipeDetails = (props) => {
  return (  
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the Recipe Details</h1>
      <Comments />
      <NewComment />
    </main>
  )
}
export default RecipeDetails