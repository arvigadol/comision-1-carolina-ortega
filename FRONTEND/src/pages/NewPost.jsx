import styles from "../styles/AuthForm.module.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/consts";

const token = localStorage.getItem("token")

const NewPost = () => {
    const ref = useRef(null);
  
    const navigate = useNavigate();
  
    const handleSubmitNuevoPosteo = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);  
    
      const title = formData.get("title");
      const description = formData.get("description");
      const imageURL = formData.get("imageURL");
  
      const post = {        
        title,
        description,
        imageURL,
      };
  
      const req = await fetch(`${API_URL}/posts/new`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
  
      if (req.status !== 201) return alert("Error al crear posteo");
      ref.current.reset();
  
      navigate("/posts");
    };
  
    return (
      <div>
        <h2>Nuevo Posteo</h2>
        <form onSubmit={handleSubmitNuevoPosteo} ref={ref} className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Nuevo título" name="title" />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Nueva description" name="description" />
          </div>
          <div className={styles.inputGroup}>
            <input type="url" placeholder="http://www.my-avatar.com" name="imageURL" />
          </div>
          <button>Crear Post</button>
        </form>
      </div>
    );
  }
  
  export default NewPost;