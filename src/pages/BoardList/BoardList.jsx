//npm modules
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

//assets
import tacocat from '../../assets/icons/tacocat.png'

//component
import BoardCard from '../../components/BoardCard/BoardCard'
import * as boardService from '../../services/boardService'

//css
import styles from './BoardList.module.css'

const BoardList = () => {
  const [boards, setBoards] = useState([])
  const [boardQuery, setBoardQuery] = useState('')

  useEffect(() => {
    const fetchBoards = async () => {
      const boardsData = await boardService.index(boardQuery)
      setBoards(boardsData)
    }
    if (boardQuery) {
      setTimeout(() => {
        fetchBoards()
      }, 1000)
    } else {
      fetchBoards()
    }
  }, [boardQuery])

  const handleBoardQuery = (e) => {
    setBoardQuery(e.target.value)
  }

  return (
    <>
      <main className={`${styles.boardslistcontainer} ${styles.main}`}>
        <Link to={'/boards/new'}>Create Board</Link>
        <h1>Board list</h1>
        <input
          className={`${styles.boardssearchbar}`}
          type='string'
          name='boardQuery'
          onChange={handleBoardQuery}
        />
        <div className={`${styles.boardflexbox}`}>
          {boards.map((board) => (
            (board.recipes.length > 0
              ?
              <BoardCard key={board._id} board={board} />
              :
              <Link to={`/boards/${board._id}`} key={board._id}>
                <div className={`${board.bgColor}`}>
                  <div className={`${styles.columnboardlist}`}>
                    <div className={`${styles.link}`} >
                      {board.title}
                    </div>
                  </div>
                    <div className={`${styles.tacocat}`} >
                      <img src={tacocat} width='80' alt='tacocat' />
                    </div>
                </div>
              </Link>
            )
          ))}
        </div>
      </main>
    </>
  )
}

export default BoardList