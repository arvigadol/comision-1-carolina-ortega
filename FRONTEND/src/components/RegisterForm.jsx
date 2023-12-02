const RegisterForm = () => {
  return (
    <div>
      <h2>Register</h2>
      <form action="">
        <div>
          <input type="email" placeholder="email@email.com" name="email" />
        </div>
        <div>
          <input type="text" placeholder="Your username" name="username" />
        </div>
        <div>
          <input type="password" placeholder="********" name="password" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};
export default RegisterForm;
