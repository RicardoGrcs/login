import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="login">
        <h2>Login</h2>
        <label htmlFor="email" className="my">
          E-mail
          <input type="email" placeholder="Escribe aqui tu email" />
        </label>
        <label htmlFor="password" className="my">
          Contraseña
          <input type="password" placeholder="Escribe aqui tu contraseña" />
        </label>
        <button type="submit" className="btn btn-primary my">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
