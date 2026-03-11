
import Input from '../formulario/forma/Input'
import Login from '../formulario/forma/Login'

import styles from './LoginAdmin.module.css'

import React from 'react'

const LoginAdmin = () => {

  return (

    <div className={styles.admin}>

      <span>Voltar para home</span>

      <div className={styles.CardAdmin}>

        <h3>Acesso Administrativo</h3>
        <span>Entre com suas credenciais de administrador</span>
        <span>Alfred Project Angola</span>

        <Input
          type="text"
          text="Email"
          name="name" placeholder="exemplo@gmail.com" />


        <Input
          type="text"
          text="Senha"
          name="name" placeholder="********" />

        <div className={styles.forget}>
          <span> <input className={styles.check} type="checkbox"/>Lembrar-me</span>
          <span>Esqueceu a senha?</span>
        </div>

        <Login name="Entrar como Admin" />

        <div className={styles.Usario}>
          <div className={styles.Or}>___________ ou ___________</div>
          É um usuário comum? entre aqui.
        </div>

      </div>


    </div>
  )
}

export default LoginAdmin
