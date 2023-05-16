//npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// components
import RecipeCard from '../../components/RecipeCard/RecipeCard'

// services
import * as boardService from '../../services/boardService'

//css
import styles from './BoardDetails.module.css'

const BoardDetails = () => {
  const { boardId } = useParams()
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const fetchBoard = async () => {
      const boardData = await boardService.show(boardId)
      setBoard(boardData)
    }
    fetchBoard()
  }, [boardId])
if(board){
  return (  
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the Board Details</h1>
      <div id={board.bgColor}>
        <div>{board.title}</div>
        <div>by {board.author.name}</div>
      </div>
      {/* <RecipeCard /> */}
    </main>
  )
}
}

export default BoardDetails