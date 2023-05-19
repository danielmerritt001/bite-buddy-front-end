import { Link } from 'react-router-dom'

//component
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const CommentCard = ({ comment, user, recipeId, handleDeleteComment }) => {
  const starArray = ['☆☆☆☆☆', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★']
  return (
    <article>
      <header>
        <span>
          <AuthorInfo user={user} createdAt={comment.createdAt} />
          {starArray[comment.rating]}
          {comment.author._id === user.profile &&
            <>
              <Link to={`/recipes/${recipeId}/comments/${comment._id}`} state={comment}>
                Edit
              </Link>
              <button onClick={() => handleDeleteComment(recipeId, comment._id)}>
                Delete
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