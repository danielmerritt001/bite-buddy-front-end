
import { Link } from 'react-router-dom'

//css
import RecipeCard from '../RecipeCard/RecipeCard'
import styles from './BoardCard.module.css'

const BoardCard = (props) => {

    return (
      <Link to={`/boards/${props.board._id}`}>
        <div className={`${props.board.bgColor}`}>
          <div className={`${styles.column}`}>
            <div className={`${styles.title}`}>
              {props.board.title}
            </div>
            <div className={`${styles.author}`}>
              {props.board.author.name}
            </div>
          </div>
          <div className={`${styles.image}`}>
            <img src={props.board.thumbnail}  width="80" alt="board" />
          </div>
        </div>
      </Link>
    )
}

export default BoardCard