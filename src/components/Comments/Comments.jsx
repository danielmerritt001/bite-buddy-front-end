// components
import CommentCard from '../CommentCard/CommentCard'

const Comments = (props) => {
  const { comments } = props
  console.log("RECIPE_COMMENTS!!!!", comments);

  if (!comments.length) return <h4>No Comments</h4>

  return (
    comments.map((comment) => (
      <CommentCard
        key={comment._id}
        comment={comment}
        user={comment.author}
      />
    ))
  )
}
export default Comments