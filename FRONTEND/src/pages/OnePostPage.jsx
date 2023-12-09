import styles from "../styles/AuthForm.module.css";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../utils/consts";
import { HiBookmark, HiOutlineTrash } from "react-icons/hi";

const token = localStorage.getItem("token")

function OnePostPage(posts) {

    const { postId } = useParams();

    const [post, setPost] = useState([]);
    
    const { auth } = useContext(AuthContext); 

    const formRef = useRef(null);

    const getPost = useCallback(() => {

      (!token) ? <Link to="/login"></Link> :

      fetch(`${API_URL}/posts/${postId}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          if (res.status !== 200) return alert("Error getting post");
  
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }, [token]);
  
    useEffect(() => {
      getPost();
    }, [postId, getPost]);

  const handleDeletePost = (postId) => {
    fetch(`${API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      if (!res.ok) return alert("Error deleting post");
      getPost();
    });
  };

  const handleUpdatePost = async (postId) => {

    const formData = new FormData();  
    
    const title = formData.get("title");
    const description = formData.get("description");
    const imageURL = formData.get("imageURL");

    const onePost = {        
      title,
      description,
      imageURL,
    };

     const req = await fetch(`${API_URL}/posts/${postId}`, {
      method: "PATCH",
      body: JSON.stringify(onePost),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (req.status !== 201) return alert("Error al crear posteo");
    ref.current.reset();

    navigate("/posts");
  };

  if (!post) return <h1>Loading...</h1>;

  return (
    <div>
      <h2> Posteo a modificar </h2>
      <form ref={formRef} className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Modificar título" name="title" />
        </div>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="Modificar description" name="description" />
        </div>
        <div className={styles.inputGroup}>
          <input type="url" placeholder="http://www.my-avatar.com" name="imageURL" />
        </div>
      </form>
      <button
        className="update-button"
        onClick={() => handleUpdatePost(post._id)}
      >
        <HiBookmark />
      </button>
      <button
        className="delete-button"
        onClick={() => handleDeletePost(post._id)}
      >
        <HiOutlineTrash />
      </button>
    </div>
  );
};

export default OnePostPage;