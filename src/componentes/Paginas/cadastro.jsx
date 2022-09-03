import React from "react";
import "../estilos/login.css";

export default function PaginaCadastro() {
  return (
    <body className="body-login">
      <main className="main-login">
        <header className="header-login"></header>
        <section className="desk-only">
          <div className="login-box">
            <h1>Serializando!</h1>
            <p>Faça seu cadastro preenchendo os campos abaixo:</p>
            <form
              /* onsubmit= */
              id="Login"
              action="../Paginas/serializando.html"
            >
              <div className="formularioLogin">
                <div>
                  <label htmlFor="txtLogin">Nome de Usuário:</label>
                  <input
                    name="txtLogin"
                    type="text"
                    id="txtLogin"
                    placeholder="Digite seu login"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="txtSenha">Senha:</label>
                  <input
                    name="txtSenha"
                    type="password"
                    id="txtSenha"
                    placeholder="Digite sua senha"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="txtEmail">Email:</label>
                  <input
                    name="txtEmail"
                    type="email"
                    id="txtSenha"
                    placeholder="Digite seu e-mail"
                    required
                  />
                </div>
                <button type="submit" className="login-register">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="mob-only">
          <div className="login-box">
            <div className="content-box">
              <h1>Serializando!</h1>
              <p>Faça seu cadastro preenchendo os campos abaixo:</p>
              <form
                onsubmit="return funcConfirmar()"
                id="Login"
                action="../Paginas/serializando.html"
              >
                <div className="formularioLogin">
                  <div>
                    <label htmlFor="txtLogin">Nome de Usuário:</label>
                    <input
                      name="txtLogin"
                      type="text"
                      id="txtLogin"
                      placeholder="Digite seu login"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="txtSenha">Senha:</label>
                    <input
                      name="txtSenha"
                      type="password"
                      id="txtSenha"
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="txtEmail">Email:</label>
                    <input
                      name="txtEmail"
                      type="email"
                      id="txtSenha"
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>
                  <button type="submit" className="login-register">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
