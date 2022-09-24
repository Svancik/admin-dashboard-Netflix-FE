import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <input type="email" className="loginInput" placeholder="email" />
        <input type="password" className="loginInput" placeholder="password" />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}
