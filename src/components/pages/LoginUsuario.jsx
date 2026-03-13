import { Link } from 'react-router-dom'

import Input from '../formulario/forma/Input'
import Login from '../formulario/forma/Login'

import styles from './LoginUsuario.module.css'

import { FaUserCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";



const LoginUsuario = () => {

  return (

    <div className={styles.admin}>

      <h5> <FaArrowLeftLong /> <Link to="/">Voltar para home</Link> </h5>

      <div className={styles.CardAdmin}>

        <FaUserCircle className={styles.icone} />

        <h3>Acesso de Usuário</h3>
        <p>Entre para gerenciar suas tarefas e projectos</p>

        <Input
          type="text"
          text="Email"
          name="name" placeholder="exemplo@gmail.com" />


        <Input
          type="text"
          text="Senha"
          name="name" placeholder="********" />

        <div className={styles.forget}>
          <span className={styles.forgetText}> <input type="checkbox" /> Lembrar-me</span>
          <span>Esqueceu a senha?</span>
        </div>

        <div className={styles.OpenAdmin}>
          <Login name="Entrar" />
        </div>

        <div className={styles.Usario}>
          <div className={styles.Or}>___________ ou ___________</div>
          Já tem uma conta? <Link to="/Pesquisar">Registra-se!</Link>
        </div>

      </div>

      <span className={styles.ResAcesso}>Acesso restrito a usuários autorizados</span>

    </div>
  )
}

export default LoginUsuario
