import React, { Fragment } from "react"

//Components
import TextInput from './components/Form/TextInput'
import Checkbox from './components/Form/Checkbox'
import BigButton from './components/Form/BigButton'

// Assets
import logo from './assets/img/logo.svg'
import './assets/css/structure.scss'
import './assets/css/login.scss'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <Fragment>
              <section className="login">
                <img src={logo} alt="AMK Bank Logo" />
                <h2 className="welcomeTitle">Bem-vindo</h2>
                <form className="fomLogin">
                  <TextInput name="nome" label="E-mail ou Usuário" type="text" />
                  <TextInput name="senha" label="Senha" type="password" />
                  <Checkbox name="lembrar" label="Lembrar meu acesso" />
                  <BigButton value="Entrar" />
                  <a href="#" className="passwordRecovery">Esqueci minha senha</a>
                </form>
              </section>
            </Fragment>
        )
    }
}

export default Login
