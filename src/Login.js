import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h1 className="h2">Login</h1>
      <div className="login-container">
        <i className="far fa-user login-icon"></i>
        <form className="login">
          <input className="my" type="email" placeholder="E-MAIL" />
          <input className="my" type="password" placeholder="CONTRASEÑA" />

          <label htmlFor="check">
            <input name="check" className="my" type="checkbox" />
            &nbsp;Recordarme
          </label>
          <button
            type="submit"
            className="btn btn-primary my"
            onClick={(e) => {
              e.preventDefault();
              alert("Hola Mundo");
            }}
          >
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
