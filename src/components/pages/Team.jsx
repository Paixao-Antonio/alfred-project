
import React from 'react'

import styles from './Team.module.css'

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiCalendar,
    FiMoreVertical,
} from "react-icons/fi";


import Pesquisar from './Pesquisar'

import Footer from './Footer'

import CardTitle from '../formulario/forma/CardTitle'

import CardSubTitle from '../formulario/forma/CardSubTitle'

const Team = () => {

    return (

        <div className={styles.aaaaaa}>

            <Pesquisar />

            <CardTitle
                header="Gestão de Equipe"
                title="Equipe"
                descricao="24 membros ativos • 4 online agora"
                variante="membro"
            />

            <CardSubTitle />

            <div className={styles.equipa}>
                <div className={styles.equipaOne}>
                    <input type="text" placeholder='pesquise por nome, cargo ou departamento...' />
                    <button>Pesquisar</button>
                </div>
            </div>

            <div className={styles.team}>

                <div className={styles.card}>
                    {/* Barra Superior */}
                    <div className={styles.topBar}></div>

                    {/* Cabeçalho */}
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            A
                            <span className={styles.online}></span>
                        </div>

                        <div className={styles.info}>
                            <h3>Ana Silva</h3>
                            <p>Desenvolvedora Senior</p>

                            <span className={styles.tag}>
                                Tecnologia
                            </span>
                        </div>

                        <FiMoreVertical className={styles.menuIcon} />
                    </div>

                    {/* Contactos */}
                    <div className={styles.contacts}>
                        <div className={styles.item}>
                            <FiMail />
                            <span>ana.silva@gestaopro.ao</span>
                        </div>

                        <div className={styles.item}>
                            <FiPhone />
                            <span>+244 923 456 789</span>
                        </div>

                        <div className={styles.item}>
                            <FiMapPin />
                            <span>Luanda, Angola</span>
                        </div>
                    </div>


                    {/* Estatísticas */}
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <span>Concluídas</span>
                            <h2>142</h2>
                        </div>

                        <div className={styles.box}>
                            <span>Em Progresso</span>
                            <h2>5</h2>
                        </div>
                    </div>

                    {/* Eficiência */}
                    <div className={styles.performance}>
                        <div className={styles.title}>
                            <span>Eficiência</span>
                            <strong>96%</strong>
                        </div>

                        <div className={styles.progress}>
                            <div className={styles.progressFill} ></div>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className={styles.footer}>
                        <div className={styles.date}>
                            <FiCalendar />
                            <span>Desde 01/2024</span>
                        </div>

                        <span className={styles.status}>
                            Online
                        </span>
                    </div>
                </div>

                <div className={styles.card}>
                    {/* Barra Superior */}
                    <div className={styles.topBar}></div>

                    {/* Cabeçalho */}
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            A
                            <span className={styles.online}></span>
                        </div>

                        <div className={styles.info}>
                            <h3>Ana Silva</h3>
                            <p>Desenvolvedora Senior</p>

                            <span className={styles.tag}>
                                Tecnologia
                            </span>
                        </div>

                        <FiMoreVertical className={styles.menuIcon} />
                    </div>

                    {/* Contactos */}
                    <div className={styles.contacts}>
                        <div className={styles.item}>
                            <FiMail />
                            <span>ana.silva@gestaopro.ao</span>
                        </div>

                        <div className={styles.item}>
                            <FiPhone />
                            <span>+244 923 456 789</span>
                        </div>

                        <div className={styles.item}>
                            <FiMapPin />
                            <span>Luanda, Angola</span>
                        </div>
                    </div>


                    {/* Estatísticas */}
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <span>Concluídas</span>
                            <h2>142</h2>
                        </div>

                        <div className={styles.box}>
                            <span>Em Progresso</span>
                            <h2>5</h2>
                        </div>
                    </div>

                    {/* Eficiência */}
                    <div className={styles.performance}>
                        <div className={styles.title}>
                            <span>Eficiência</span>
                            <strong>96%</strong>
                        </div>

                        <div className={styles.progress}>
                            <div className={styles.progressFill}></div>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className={styles.footer}>
                        <div className={styles.date}>
                            <FiCalendar />
                            <span>Desde 01/2024</span>
                        </div>

                        <span className={styles.status}>
                            Online
                        </span>
                    </div>
                </div>

                <div className={styles.card}>
                    {/* Barra Superior */}
                    <div className={styles.topBar}></div>

                    {/* Cabeçalho */}
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            A
                            <span className={styles.online}></span>
                        </div>

                        <div className={styles.info}>
                            <h3>Ana Silva</h3>
                            <p>Desenvolvedora Senior</p>

                            <span className={styles.tag}>
                                Tecnologia
                            </span>
                        </div>

                        <FiMoreVertical className={styles.menuIcon} />
                    </div>

                    {/* Contactos */}
                    <div className={styles.contacts}>
                        <div className={styles.item}>
                            <FiMail />
                            <span>ana.silva@gestaopro.ao</span>
                        </div>

                        <div className={styles.item}>
                            <FiPhone />
                            <span>+244 923 456 789</span>
                        </div>

                        <div className={styles.item}>
                            <FiMapPin />
                            <span>Luanda, Angola</span>
                        </div>
                    </div>


                    {/* Estatísticas */}
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <span>Concluídas</span>
                            <h2>142</h2>
                        </div>

                        <div className={styles.box}>
                            <span>Em Progresso</span>
                            <h2>5</h2>
                        </div>
                    </div>

                    {/* Eficiência */}
                    <div className={styles.performance}>
                        <div className={styles.title}>
                            <span>Eficiência</span>
                            <strong>96%</strong>
                        </div>

                        <div className={styles.progress}>
                            <div className={styles.progressFill}></div>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className={styles.footer}>
                        <div className={styles.date}>
                            <FiCalendar />
                            <span>Desde 01/2024</span>
                        </div>

                        <span className={styles.status}>
                            Online
                        </span>
                    </div>
                </div>

                <div className={styles.card}>
                    {/* Barra Superior */}
                    <div className={styles.topBar}></div>

                    {/* Cabeçalho */}
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            A
                            <span className={styles.online}></span>
                        </div>

                        <div className={styles.info}>
                            <h3>Ana Silva</h3>
                            <p>Desenvolvedora Senior</p>

                            <span className={styles.tag}>
                                Tecnologia
                            </span>
                        </div>

                        <FiMoreVertical className={styles.menuIcon} />
                    </div>

                    {/* Contactos */}
                    <div className={styles.contacts}>
                        <div className={styles.item}>
                            <FiMail />
                            <span>ana.silva@gestaopro.ao</span>
                        </div>

                        <div className={styles.item}>
                            <FiPhone />
                            <span>+244 923 456 789</span>
                        </div>

                        <div className={styles.item}>
                            <FiMapPin />
                            <span>Luanda, Angola</span>
                        </div>
                    </div>


                    {/* Estatísticas */}
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <span>Concluídas</span>
                            <h2>142</h2>
                        </div>

                        <div className={styles.box}>
                            <span>Em Progresso</span>
                            <h2>5</h2>
                        </div>
                    </div>

                    {/* Eficiência */}
                    <div className={styles.performance}>
                        <div className={styles.title}>
                            <span>Eficiência</span>
                            <strong>96%</strong>
                        </div>

                        <div className={styles.progress}>
                            <div className={styles.progressFill}></div>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className={styles.footer}>
                        <div className={styles.date}>
                            <FiCalendar />
                            <span>Desde 01/2024</span>
                        </div>

                        <span className={styles.status}>
                            Online
                        </span>
                    </div>
                </div>



            </div>

             <Footer />

        </div>
    )
}

export default Team
