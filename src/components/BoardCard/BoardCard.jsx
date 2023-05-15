//css
import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './BoardCard.module.css'

const BoardCard = (props) => {
  return (
    <>
    {props.profile.boards.map((board, index) => {
      if (Array.isArray(board)){
      // const board = props.profile.boards
    console.log(props.profile.boards, 'these are the boards')
      return (  
        <article className={styles.container} key ={board}>
          <h1>This is the board card</h1>
            <RecipeCard key={board}/>
        </article>
        )
      }
    })}
    </>
  )
}

export default BoardCard