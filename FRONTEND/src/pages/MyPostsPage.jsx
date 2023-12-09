import styles from "../styles/Post.module.css";

import { useCallback, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import MyPost from "../components/MyPost";

const token = localStorage.getItem("token")

function MyPostsPage() {
  const [posts, setPosts] = useState([]);

  const { auth } = useContext(AuthContext);  
  
  const getPost = useCallback(() => {

    (!token) ? <Link to="/login"></Link> :
    
    fetch(`${API_URL}/posts`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    getPost();
  }, [auth, getPost]);

  return (
      <div className={styles.container}>
        <h1>My posts</h1>
        <main className={styles.section}>
          <MyPost getPost={getPost} posts={posts} />
        </main>
      </div>
  );
}
export default MyPostsPage;