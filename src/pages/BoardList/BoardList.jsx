//modules
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//component
import BoardCard from '../../components/BoardCard/BoardCard'
import * as boardService from '../../services/boardService'

//css
import styles from './BoardList.module.css'

const BoardList = (props) => {
  const [boards, setBoards] = useState([])

  useEffect(()=>{
    const fetchboards = async () => {
      const boardsData = await boardService.index()
      setBoards(boardsData)
    }
    fetchboards()
  }, [])

  return (
    <>
      <Link to={'/boards/new'}>Create Board
      </Link>
      <main className={`${styles.container} ${styles.main}`}>
        <h1>Hello, I'm the board list</h1>
        {boards.map((board)=>(
          (board.recipes.length > 0 ? <BoardCard key={board._id} board={board}/> : <h3 key={board._id}>No Recipes Yet!</h3>)
          ))}
      </main>
    </>
  )
}

export default BoardList