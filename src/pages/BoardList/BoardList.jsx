//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './BoardList.module.css'

const BoardList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the board list</h1>
      {/* <BoardCard /> */}
    </main>
  )
}

export default BoardList