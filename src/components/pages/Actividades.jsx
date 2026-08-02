

import React from 'react'

import Pesquisar from './Pesquisar'

import styles from './Actividades.module.css'

const Actividades = () => {
    return (

        <div >

            <Pesquisar />

            <div className={styles.DivActividades}>

                <div className={styles.DivActividadesHeader}>
                    <span className={styles.DivActividadesIcon}>icone</span>
                    <div>
                        <h2>Adicionar comentário</h2>
                        <span className={styles.DivActividadesText}>Participe da discussão do projecto</span>
                    </div>
                </div>

                <div className={styles.DivActividadesInput}>
                    <textarea name="" id=""></textarea>
                </div>

                <div className={styles.DivActividadesAdd}>
                    <p>Seu comentário estará visível para todos membros deste projecto</p>
                    <button>Adicionar Comentário</button>
                </div>

            </div>

            <div className={styles.DivPesquisarActividades}>
                <div className={styles.DivPesquisarActividadesOne}>
                    <input type="text" placeholder='pesquise suas actividades' />
                    <select name="" id="" required>
                        <option value="" disabled selected hidden>Filtrar</option>
                        <option value="" >Todas actividades</option>
                        <option value="">Do último mês</option>
                        <option value="">Dos últimos três meses</option>
                        <option value="">Dos últimos seis meses</option>
                    </select>
                </div>
            </div>

            <div className={styles.DivActividadesCrono}>
                <div>
                    <h3>Linha de tempo</h3>
                    <p>Histórico cronológico de todas actividades</p>
                </div>

                <div className={styles.DivActividadesCronoOne}>

                    <div >
                        <div className={styles.DivActividadesCronoTwo}>
                            <span>P</span>
                            <h4>Paixao Antonio</h4>
                        </div>
                        <div className={styles.DivActividadesCronoThree}>
                            <div>1d atrás</div>
                            <div className={styles.DivActividadesCronoThreeOne}>Dashboard Analitycs</div>
                        </div>

                        <textarea className={styles.DivActividadesCronoText}  name="" id="" placeholder='Precisamos revisar o orçamento dos relatórios com urgência!'></textarea>
                       
                    </div>

                </div>

            </div>

            <div className={styles.DivActividadesChanger}>
                <div className={styles.DivActividadesChangerOne}>Icone</div>
                <div className={styles.DivActividadesChangerTwo}>
                    <h3>Registro aumtomático das alterações</h3>
                    <span>Todas alterações feitas em projectos são registradas automaticamente no histórico. Isso garante total restraebilidade e transparência nas informações.</span>
                </div>
            </div>

          

        </div>
    )
}

export default Actividades
