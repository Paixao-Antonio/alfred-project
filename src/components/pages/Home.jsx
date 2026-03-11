
import Botao from '../formulario/Botao'
import Titulo from './Titulo'
import React from 'react'

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

import styles from "./Home.module.css"

const Home = () => {

  const { ref, inView } = useInView({
    triggerOnce: true
  })

  return (

    <div>

      <div className={styles.divhome}>
        <h4>Feito para o mercado angolano</h4>
        <h1>Gestão de Projectos</h1>
        <h2>Moderna & Eficiente</h2>
        <p>Plataforma completa para gerenciar projectos, tarefas e equipas com metodologias ágeis e padrões PMBOK</p>

        <div className={styles.divbotao}>
          <Botao name='Começar Agora' />
          <Botao name='Começar Agora' />
        </div>

      </div>

      <Titulo name="Recursos Completos" />

      <div className={styles.divtexto}>
        <p>Tudo que você precisa para gerenciar projectos de forma profissional e organizada</p>
      </div>

      <div className={styles.divcard}>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

        <div className={styles.card}>
          <h3>Gestão de Projectos</h3>
          <p>Organize e acompanhe todos os seus projectos em um único lugar com visibilidade completa</p>
        </div>

      </div>

      <div ref={ref} className={styles.divdados}>

        <div className={styles.dados}>
          <h4>
            {inView && <CountUp end={99.9} duration={4} />}%
          </h4>
          <p>Disponibilidade</p>
        </div>

        <div className={styles.dados}>
          <h4>
            {inView && <CountUp end={500} duration={4} />}+
          </h4>
          <p>Projectos Gerenciados</p>
        </div>

        <div className={styles.dados}>
          <h4>
            {inView && <CountUp end={1000} duration={4} />}+
          </h4>
          <p>Usuários Activos</p>
        </div>

        <div className={styles.dados}>
          <h4>24/7</h4>
          <p>Suporte Disponível</p>
        </div>

      </div>

      <Titulo name="Porque nos escolher?" />

      <div className={styles.divporque}>

        <div className={styles.cardporque}>
          <h4>Icone</h4>
          <p>Seguro e Confiavél</p>
        </div>

        <div className={styles.cardporque}>
          <h4>Icone</h4>
          <p>Seguro e Confiavél</p>
        </div>

        <div className={styles.cardporque}>
          <h4>Icone</h4>
          <p>Seguro e Confiavél</p>
        </div>

        <div className={styles.cardporque}>
          <h4>Icone</h4>
          <p>Seguro e Confiavél</p>
        </div>

      </div>

    </div>

  )
}

export default Home
