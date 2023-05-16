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

  console.log(boardId)
  return (  
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the Board Details</h1>
      {/* <RecipeCard /> */}
    </main>
  )
}

export default BoardDetails