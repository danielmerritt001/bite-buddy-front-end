//css
import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './BoardCard.module.css'

const BoardCard = () => {
  return (  
    <article className={styles.container}>
      <h1>This is the board card</h1>
        <RecipeCard/>
    </article>
  )
}

export default BoardCard