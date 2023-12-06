import { Link } from "react-router-dom"

const CommentsPage = () => {
  return (
    <div>
      <h1>Comentarios del post publicado por "user" el "fecha"</h1>
      <p>
        COMMENT
      </p>
      <Link to="/posts">Volver a Posts</Link>
    </div>
  )
}
export default CommentsPage