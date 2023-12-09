import CommentItem from "./CommentItem"

const Comments = ({comments}) => {
  return (
    <>
        {comments.map((comment) => {
        return <CommentItem key={comment._id} comment={comment}/>
            })
        }
    </>
  )
}
export default Comments