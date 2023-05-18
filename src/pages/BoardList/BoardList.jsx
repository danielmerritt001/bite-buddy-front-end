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

const BoardList = (props) => {
  const [boards, setBoards] = useState([])
  const [boardQuery, setBoardQuery] = useState('')
  //if we want a submit form follow hoot new blog form
  useEffect(()=>{
    const fetchBoards = async () => {
      const boardsData = await boardService.index(boardQuery)
      setBoards(boardsData)
    }
    if(boardQuery){
      setTimeout(()=>{
        fetchBoards()
      }, 1000)
    }else{
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
        {boards.map((board)=>(
          (board.recipes.length > 0 
            ?
              <BoardCard key={board._id} board={board}/> 
            : 
              <div className={`${styles.nobgselectedboard}`} key={board._id}>
                <Link to={`/boards/${board._id}`}>
                  {board.title}
                </Link>
                <img src={tacocat} width="100" alt="tacocat"/>
              </div>
          )))}
      </main>
    </>
  )
}

export default BoardList