const CommentItem = ({comment}) => {
    return (
      <div key={comment._id}>
          <p>Autor: {comment.author.username}</p>
          <p>Comment: {comment.description}</p>
      </div>
    )
  }
  export default CommentItem