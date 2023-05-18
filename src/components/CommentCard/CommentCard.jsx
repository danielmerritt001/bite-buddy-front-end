import { Link } from 'react-router-dom'

//component
import AuthorInfo from '../AuthorInfo/AuthorInfo'
//css
import styles from './CommentCard.module.css'

const CommentCard = ({comment, user, recipeId, handleDeleteComment }) => {
  const starArray = ['☆☆☆☆☆','★☆☆☆☆','★★☆☆☆', '★★★☆☆', '★★★★☆','★★★★★']
  return (
    <article>
      <header>
        <span>
        <AuthorInfo user={user} createdAt={comment.createdAt} />
          {starArray[comment.rating]}
          {comment.author._id === user.profile &&
            <>
              <Link to={`/recipes/${recipeId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
							<button onClick={()=> handleDeleteComment(recipeId, comment._id)}>
                DELETE
              </button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}
export default CommentCard



// <main className={`${styles.container} ${styles.main}`}>
// <AuthorInfo user={user} createdAt={comment.createdAt} />
// <h3>{comment.text}</h3>
// {comment.rating}
// </main>