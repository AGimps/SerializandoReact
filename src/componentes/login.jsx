import React from "react";
import './login.css'

export default function PaginaInicial() {
    return(
        <body className="body-login">
            <main className="main-login">
        <header className="header-login"></header>
        <section className="desk-only">
            <div className="login-box">
                <h1>Serializando!</h1>
                <p>O mundo das séries a um clique de distância!</p>
                <form id= "Login" action="Paginas/serializando.html">
                    <div className="formularioLogin">
                        <div>
                            <label htmlFor="txtLogin">Nome de Usuário</label>
                            <input name = "txtLogin" type="text" id="txtLogin" placeholder="Digite seu login" required/>
                        </div>
                    <div>
                        <label htmlFor="txtSenha">Senha</label>
                        <input name = "txtSenha" type="password" id="txtSenha" placeholder="Digite sua senha" required/>
                    </div>
                    <button type="submit" className="btnLogar">Logar</button>
                    <a className="login-register" href="Paginas/cadastro.html">Cadastrar</a>
                    <label className="checkbox-login">
                        <input type="checkbox" checked="checked" /> Manter conectado.
                    </label>
                </div>
            </form>
            </div>
        </section>
        <section className="mob-only">
            <div className="login-box">
                <div className="content-box">
                    <h1>Serializando!</h1>
                    <p>O mundo das séries a um clique de distância!</p>
                    <form id= "Login" action="Paginas/serializando.html">
                        <div className="formularioLogin">
                            <div>
                                <label htmlFor="txtLogin">Nome de Usuário</label>
                                <input name = "txtLogin" type="text" id="txtLogin" placeholder="Digite seu login" required/>
                            </div>
                        <div>
                            <label htmlFor="txtSenha">Senha</label>
                            <input name = "txtSenha" type="password" id="txtSenha" placeholder="Digite sua senha" required/>
                        </div>
                        <div className="div-button">
                            <button type="submit" className="btnLogar">Logar</button>
                        </div>
                        <div>
                            <a className="login-register" href="Paginas/cadastro.html">Cadastrar</a>
                        </div>
                        <label>
                            <input className="checkbox-login" type="checkbox" checked="checked" /> Manter conectado.
                        </label>
                    </div>
                </form>
                </div>
            </div>
        </section>
    </main>
    </body>    
    );
}