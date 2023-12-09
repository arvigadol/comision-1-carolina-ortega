import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

const CommentsPage = () => {
  const { postId } = useParams();

  const [post, setPost] = useState(null);

  const { auth } = useContext(AuthContext);
  const formRef = useRef(null);

  const getPost = () => {
    fetch(`${API_URL}/posts/${postId}`, {
      headers: {
        Authorization: auth.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) return alert("Error getting post");

        return res.json();
      })
      .then((data) => {
        setPost(data);
      });
  };

  useEffect(() => {
    getPost();
  }, [postId, auth]);

  const handleDeleteComment = (commentId) => {
    fetch(`${API_URL}/comments/${postId}/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: auth.token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error deleting comment");
      getPost();
    });
  };

  const handleUpdateComment = (commentId) => {
    fetch(`${API_URL}/comments/${postId}/${commentId}`, {
      method: "PATCH",
      headers: {
        Authorization: auth.token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error updating comment");
      getPost();
    });
  };

  const handleCreateNewComment = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`${API_URL}/comments/${postId}`, {
      method: "POST",
      body: JSON.stringify({
        description: formData.get("description"),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error creating new comment");
      getPost();
    });

    formRef.current.reset();
  };

  if (!post) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <form onSubmit={handleCreateNewComment} ref={formRef}>
        <input type="text" name="description" placeholder="comment" />
        <button>Create new Comment</button>
      </form>
      {post.comments.map((comment) => {
        return (
          <div key={comment._id} className="comment">
            <p>{comment.description}</p>
            <button
              className="update-button"
              onClick={() => handleUpdateComment(comment._id)}
            >
              <HiOutlinePencilAlt />
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteComment(comment._id)}
            >
              <HiOutlineTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;