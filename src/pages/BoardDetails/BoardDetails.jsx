//modules
import RecipeCard from '../../components/RecipeCard/RecipeCard'

//css
import styles from './BoardDetails.module.css'

const BoardDetails = (props) => {
  return (  
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the Board Details</h1>
      <RecipeCard />
    </main>
  )
}

export default BoardDetails