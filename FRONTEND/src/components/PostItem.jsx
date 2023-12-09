import { Link } from "react-router-dom";
import styles from "../styles/Post.module.css";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { useId } from "react";
import DeletePostModel from "./DeletePostModel";

const PostItem = ({ post, getPost, onClick }) => {
  const modalId = useId();

  return (
    <div
      key={post._id}
      className={styles.item}
      onClick={(e) => {
        // stop propagation to avoid triggering the onClick of the parent

        e.stopPropagation();

        onClick();
      }}
    >
      <picture>
        <img src={post.imageURL} alt={post.author.username} />
      </picture>
      <section>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>
          <b>{post.author.username}</b>
          <span>{post.comments.length}</span>
        </p>
      </section>
    </div>
  );
};

export default PostItem;