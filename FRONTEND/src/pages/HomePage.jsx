import styles from "../styles/Landing.module.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { API_URL } from "../utils/const";

function HomePage() {
  const [home, setHome] = useState([]);

  const { logout } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  console.log(token)
  function isLoggedIn () {
    if(token ==! undefined || token ==! null || token) {
      return true;
    } else {
      return false
    }
  }
  
  console.log(isLoggedIn())

  useEffect (() => {
    fetch(`${API_URL}/`)
    .then((res) => res.json())
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err));
  }, [])

  return (
    <div className={styles.container}>
      <div>
        {isLoggedIn()
          ? <button onClick={logout}>Logout</button> 
          : <Link to="/login">Login</Link> 
        }
      </div> 
      <div>
        {isLoggedIn()
          ? <Link to="/posts">Ver mis Posts</Link> 
          : <Link to="/posts" hidden >Ver mis Posts</Link>
        }
      </div> 
 
      <h1>Home Page</h1>
      <p>
        Bienvenidos al Blog de Viajes
      </p> 
    </div>
  );
}


export default HomePage;