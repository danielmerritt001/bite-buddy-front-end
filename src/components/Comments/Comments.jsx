// components
import CommentCard from '../CommentCard/CommentCard'

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>
  if (props.comments.length>0){
    return (
    <>
      {props.comments.map((comment) => (
        <CommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
        />
      ))}
    </>
    )
  }else{
    return(
      <CommentCard/>
    )
  }
}

export default Comments