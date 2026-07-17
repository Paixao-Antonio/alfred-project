
import React from 'react'

import CardTitle from '../formulario/forma/CardTitle'
import { HiOutlineUserGroup, HiOutlineClock, } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";

import Pesquisar from './Pesquisar'
import Footer from './Footer'

import stylesPesquisar from './Pesquisar.module.css'
import styles from './Projects.module.css'
import CardSubTitle from '../formulario/forma/CardSubTitle'
import ProjectSearch from '../formulario/forma/ProjectSearch'


const projects = ({ estado }) => {

    return (

        <div >
            <Pesquisar />

            <CardTitle
                header="Gestão de Projectos"
                title="Projectos"
                descricao="Gerencie todos seus projectos da organização"
            />

            <CardSubTitle />

            <ProjectSearch
                placeholder='pesquise por nome ou gerente'
                variante='despadrao'
            />

            <div className={styles.cardOne }>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>     
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Activo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves </span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Ativo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves</span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Ativo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves</span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Ativo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves</span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Ativo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves</span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className={styles.cardTwo}>

                    <div className={styles.card}>

                        <div className={styles.BarraSup}></div>

                        <div className={styles.content}>

                            <div className={styles.headerTitle}>
                                <div>
                                    <h2 className={styles.title}>
                                        Portal de Ensino Online
                                    </h2>

                                    <p className={styles.id}>
                                        ID: 4
                                    </p>
                                </div>

                                <span className={styles.status}>
                                    <span className={styles.dot}></span>
                                    Ativo
                                </span>
                            </div>


                            <div className={styles.nome}>
                                <RiGroupLine className={styles.icon} />
                                <span>Pedro Alves</span>
                            </div>

                            <div className={styles.progressSection}>

                                <div className={styles.progressInfo}>
                                    <span>Progresso</span>
                                    <strong>78%</strong>
                                </div>

                                <div className={styles.progressBarra}>
                                    <div className={styles.progressFill}></div>
                                </div>

                            </div>

                            <div className={styles.detalhes}>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        ↑ Orçamento
                                    </span>

                                    <h3>3,9M</h3>

                                    <p className={styles.data}>de 4,8M kz</p>

                                    <span className={styles.successo}>
                                        81% usado
                                    </span>
                                </div>

                                <div className={styles.detalhesCaixa}>
                                    <span className={styles.label}>
                                        <HiOutlineClock />
                                        Prazo
                                    </span>

                                    <h3>30/04</h3>

                                    <p className={styles.inicio}>Inicio: 01/11</p>
                                </div>

                            </div>

                            {/* Rodapé */}
                            <div className={styles.footer}>
                                <span>Media</span>

                                <button className={styles.menu}>
                                    ⋮
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


            <Footer />

        </div>
    )
}

export default projects
