import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2 className="h2">Login</h2>
      <div className="login-container">
        <i className="far fa-user login-icon"></i>
        <form className="login">
          <input className="my" type="email" placeholder="E-MAIL" required />
          <input
            className="my"
            type="password"
            placeholder="CONTRASEÑA"
            required
          />

          <label htmlFor="check">
            <input name="check" className="my" type="checkbox" />
            &nbsp;Recordarme
          </label>

          <button type="submit" className="btn btn-primary my">
            ENTRAR
          </button>
        </form>
        <i className="fas fa-key login-icon"></i>
      </div>
      <h3 className="h2 link">¿Olvidaste tu contraseña?</h3>
    </div>
  );
};

export default Login;
