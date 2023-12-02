const LoginForm = () => {
  return (
    <div>
      <h2>Login</h2>
      <form action="">
        <div>
          <input type="email" placeholder="email@email.com" name="email" />
        </div>
        <div>
          <input type="password" placeholder="********" name="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
