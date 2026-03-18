
import { Link } from 'react-router-dom'

import logo2 from "../../img/logo2.png"

import styles from './Footer.module.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (


    <div className={styles.rodapeMaior}>

      <div className={styles.rodape}>

        <div className={styles.NoLinks}>

          <Link to="/"> <img src={logo2} alt="alfre-project" /></Link>
          <p>Plataforma moderna de gestão de projetos desenvolvida para o mercado angolano. Organize, colabore e entregue projetos com excelência.</p>

          <div className={styles.ListIcone}>

            <h5><MdEmail className={styles.IconeRodape} />contato@alfred-project.ao</h5>
            <h5><FaPhoneAlt className={styles.IconeRodape} />+244 926 834 602</h5>
            <h5><FaLocationDot className={styles.IconeRodape} />Luanda, Angola</h5>

          </div>

        </div>

        <div>

          <h2>Navegação</h2>

          <div className={styles.links}>
            <Link to="/Pesquisar">Dashboard</Link>
            <Link to="/Pesquisar">Projectos</Link>
            <Link to="/Pesquisar">Tarefas</Link>
            <Link to="/Pesquisar">Relatórios</Link>
          </div>

        </div>

        <div>

          <h2>Recursos</h2>

          <div className={styles.links}>
            <Link to="/Pesquisar">Documentação</Link>
            <Link to="/Pesquisar">Tutoriais</Link>
            <Link to="/Pesquisar">Modelos | TAP </Link>
            <Link to="/Pesquisar">Centro de Ajuda</Link>
          </div>

        </div>

        <div>

          <h2>Empresa</h2>

          <div className={styles.links}>
            <Link to="/Pesquisar">Sobre Nós</Link>
            <Link to="/Pesquisar">Carreiras</Link>
            <Link to="/Pesquisar">Blog</Link>
            <Link to="/Pesquisar">Parceiros</Link>
          </div>

        </div>

        <div>

          <h2>Legal</h2>

          <div className={styles.links}>
            <Link to="/Pesquisar">Privacidade</Link>
            <Link to="/Pesquisar">Teros de Uso</Link>
            <Link to="/Pesquisar">Segurança</Link>
            <Link to="/Pesquisar">Conformidade</Link>
          </div>

        </div>

      </div>

      <div className={styles.Down}>
        <p>© 2026 Alfred-Project. Todos os direitos reservados.Versão 1.0.0</p>
        <div className={styles.RedesSociais}>
          <Link to="/Pesquisar"><FaFacebook className={styles.Icones} /></Link>
          <Link to="/Pesquisar"><FaInstagram className={styles.Icones} /></Link>
          <Link to="/Pesquisar"><FaLinkedin className={styles.Icones} /></Link>
        </div>
      </div>


    </div>
  )
}

export default Footer
