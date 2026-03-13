
import { Link } from 'react-router-dom'

import Input from '../formulario/forma/Input'
import Login from '../formulario/forma/Login'

import styles from './LoginAdmin.module.css'

import { RiAdminFill } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";



const LoginAdmin = () => {

  return (

    <div className={styles.admin}>

      <h5> <FaArrowLeftLong /> <Link to="/">Voltar para home</Link> </h5>

      <div className={styles.CardAdmin}>

        <RiAdminFill className={styles.icone} />

        <h3>Acesso Administrativo</h3>
        <p>Entre com suas credenciais de administrador</p>

        <Input
          type="text"
          text="Email Administrativo"
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
          <Login name="Entrar como Admin" />
        </div>

        <div className={styles.Usario}>
          <div className={styles.Or}>___________ ou ___________</div>
          É um usuário comum? <Link to="/login-usuario">entre aqui.</Link>
        </div>

      </div>

      <span className={styles.ResAcesso}>Acesso restrito a administradores autorizados</span>

    </div>
  )
}

export default LoginAdmin
