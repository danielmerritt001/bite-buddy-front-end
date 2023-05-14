//css
import styles from './NewComment.module.css'

const NewComment = () => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>This is a new comment</h1>
      <button>Add Comment!</button>
    </main>
    )
}

export default NewComment