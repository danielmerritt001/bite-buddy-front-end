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
      <main className={`${styles.container} ${styles.main}`}>
        {board.author._id === props.user?.profile &&
          <>
            <Link to={`/boards/${boardId}/edit`} state={board}>Edit</Link>
            <button onClick={() => props.handleDeleteBoard(boardId)}>
              Delete
            </button>
          </>
        }
        <div id={board.bgColor}>
          <div>{board.title}</div>
          <div>by {board.author.name}</div>
        </div>
        {board.recipes.map((recipe, idx) => (
          <RecipeCard key={board.recipes[idx]._id} recipe={recipe} />
        ))}
      </main>
    )
  }
}

export default BoardDetails