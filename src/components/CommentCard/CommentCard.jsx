//component
import AuthorInfo from '../AuthorInfo/AuthorInfo'

//css
import styles from './CommentCard.module.css'

const CommentCard = () => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, Im the Comment Card</h1>
      <AuthorInfo />
    </main>
    )
}

export default CommentCard