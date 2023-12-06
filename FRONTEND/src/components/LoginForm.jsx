import styles from "../styles/AuthForm.module.css";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const LoginForm = () => {

  const ref = useRef(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formLoginData = new FormData(e.target);

    const email = formLoginData.get("email");
    const password = formLoginData.get("password");

    const userLogin = {
      email,
      password,
    };

    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 200) {
      ref.current.reset();
      return alert("Error al iniciar sesión");
    }

    const res = await req.json();

    login(res);

    ref.current.reset();

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} ref={ref} className={styles.form}>
        <div className={styles.inputGroup}>
          <input type="email" placeholder="email@email.com" name="email" />
        </div>
        <div className={styles.inputGroup}>
          <input type="password" placeholder="********" name="password" />
        </div>
        <button>Login</button>
      </form>
      <div>
        <p>Aún no eres usuario?  
          <Link to="/register">Registrate</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
