
import React  from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CardTitle.module.css'

import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const CardTitle = ({header, title, descricao, variante = 'padrao' }) => {

    const navigate = useNavigate();

    return (

        <div className={styles.cardTitle}>
            <div className={styles.cardTitleOne}>
                <div className={styles.cardTitleTwo}>
                   
                    <h5>{header}</h5>
                    <h3>{title}</h3>
                    <span className={styles.span}>{descricao}</span>
                </div>

                <div className={styles.cardTitleThree}>

                    {variante === 'padrao' && (
                        <>
                            <input type="radio" name="" id="" />
                            <button onClick={() => navigate('/create-project')}>+ Novo Projecto</button>

                        </>
                    )}

                    {variante === 'duplobotao' && (
                        <>
                            <button>Cancelar</button>
                            <button>Guardar o projecto</button>
                        </>
                    )}

                    {variante === 'onbutton'  && (
                        <>
                            <button className={styles.CardBotao}> <MdOutlineCreateNewFolder /> Salvar o Projecto</button>
                        </>
                    )}

                     {variante === 'baixar'  && (
                        <>
                            <button className={styles.CardBotao}> <MdOutlineCreateNewFolder /> Baixar Guia Completo</button>
                        </>
                    )}

                    {variante === 'membro' && (
                        <>
                            <button className={styles.CardBotao}> <FiUsers />Adicionar Membro</button>
                        </>
                    )}


                </div>
            </div>
        </div>
    )
}

export default CardTitle
