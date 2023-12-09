import styles from "../styles/Landing.module.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Buttons = () => {

    const { logout } = useContext(AuthContext);

    const token = localStorage.getItem("token");

  function isLoggedIn () {
    if(token ==! undefined || token ==! null || token) {
      return true;
    } else {
      return false
    }
  }

  return (
    <div> {isLoggedIn() ? 
        <div className={styles.botones}>
          <Link to="/" onClick={logout} className="btn btn-danger">Logout</Link>
          <Link to="/register" hidden >Register</Link>
          <Link to="/posts/myposts" className="btn btn-primary">Ver mis Posts</Link>   
        </div> :
        <div className={styles.botones}>
          <Link to="/login" className="btn btn-success">Login</Link> 
          <Link to="/register" className="btn btn-primary">Register</Link> 
          <Link to="/posts" hidden >Ver mis Posts</Link>
        </div>} 
      </div> 
  )
}
export default Buttons