import styles from "../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const token = localStorage.getItem("token")

  return (
    <nav className={styles.container}>
        <ul>
            <li>        
                <NavLink className={({isActive})=> {
                 return isActive ? "active" : "";
                }}
                to="/">
                    Home
                </NavLink></li>
            <li>
                <NavLink className={({isActive}) => {
                return isActive ? "active" : "";
                }}
                to="/posts">
                    Posts
                </NavLink> 
            </li>
            <li>
                <NavLink className={({isActive}) => {
                return isActive ? "active" : "";
                }}
                 to="/posts/new">
                    Crear Post
                 </NavLink> 
            </li>
        </ul>          
    </nav>
  );
};

export default Navbar;