//npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// components
import RecipeCard from '../../components/RecipeCard/RecipeCard'

// services
import * as boardService from '../../services/boardService'

//css
import styles from './BoardDetails.module.css'

const BoardDetails = (props) => {
  const { boardId } = useParams()
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const fetchBoard = async () => {
      const boardData = await boardService.show(boardId)
      setBoard(boardData)
    }
    fetchBoard()
  }, [boardId])

  if (board) {
    return (
      <main className={`${styles.main}`}>
        <div className={`${styles.boarddetailscontainer}`} >
          {board.author._id === props.user?.profile &&
            <>
              <Link to={`/boards/${boardId}/edit`} state={board}>Edit</Link>
              <button onClick={() => props.handleDeleteBoard(boardId)}>
                Delete
              </button>
            </>
          }
          <div id={board.bgColor}>
            <div className={`${styles.boarddetailstitle}`}>
              {board.title}
            </div>
            <div className={`${styles.boarddetailsauthor}`} >
              by {board.author.name}
            </div>
          </div>
          {board.recipes.map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} />
          ))}
        </div>
      </main>
    )
  }
}

export default BoardDetails