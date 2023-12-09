import styles from "../styles/Post.module.css";

import { useCallback, useContext, useEffect, useState } from "react";
import { API_URL } from "../utils/consts";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Post from "../components/Post";


function PostsPage() {
  const [posts, setPosts] = useState([]); 
  
  const getPost = useCallback(() => {
    
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
      <div className={styles.container}>
        <h1>Posts</h1>
        <main className={styles.section}>
            <div>
                {posts.length === 0 
                ? 
                <p>"Aún no se han publicado posts"</p> 
                : 
                <>  
                <Post getPost={getPost} posts={posts} />
                </>}
            </div>
        </main>
      </div>
  );
}
export default PostsPage;