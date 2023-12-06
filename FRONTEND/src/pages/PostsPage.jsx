import { Link } from "react-router-dom"

const PostsPage = () => {
  return (
    <div>
      <h2>POST</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        labore placeat repellendus earum eum obcaecati tempora ipsum ab magnam
        impedit, quod dolores eos soluta voluptatum eveniet fuga eius. Laborum,
        quasi?
      </p>
      <Link to="/comments">Ir a comentarios del post</Link>
    </div>
  )
}
export default PostsPage