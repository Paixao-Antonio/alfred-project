


import Footer from './Footer'
import Pesquisar from './Pesquisar'
import CardTitle from '../formulario/forma/CardTitle'

import { FaRegFileAlt } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Guia.module.css"

const Guia = () => {
    return (

        <div>

            <Pesquisar />

            <CardTitle
                header="Centro do conhecimento"
                title="Guia de Gestão de Projectos"
                descricao="Fundamentos, metodologia e as melhores práticas para gestão de projecto"
                variante='baixar'
            />


            <div className={styles.guia}>
                <div className={styles.guiaOne}>
                    <div className={styles.guiaIcone}><FaRegFileAlt /></div>
                    <div>
                        <h2>Definições Fundamentais</h2>
                        <span>Conceitos essencias de Gestão de Projectos</span>
                    </div>

                </div>

                <div className={styles.guiaTwo}>
                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                </div>

                <div className={styles.guiaTwo}>
                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                    <div className={styles.guiaThree}>
                        <div className={styles.guiaThreeOne}> <GoProject className={styles.guiaThreeIcone} /> <span>Projecto</span></div>
                        <p>Esforço temporário empreendido para criar um produto, serviço ou resultado único. Possui início e fim definidos e objetivos específicos.</p>
                    </div>

                </div>

                <div className={styles.guiaMetodologia}>
                    <div className={styles.guiaMetodologiaOne}>
                        <div className={styles.MetodologiaIcone}><FaRegFileAlt /></div>

                        <div className={styles.guiaMetodologiaText}>
                            <div>
                                <h2>Definições Fundamentais</h2>
                                <span>Conceitos essencias de Gestão de Projectos</span>
                            </div>

                            <div><IoIosArrowDown /></div>
                        </div>

                    </div>
                </div>

                <div className={styles.guiaMetodologia}>
                    <div className={styles.guiaMetodologiaOne}>
                        <div className={styles.MetodologiaIcone}><FaRegFileAlt /></div>

                        <div className={styles.guiaMetodologiaText}>
                            <div>
                                <h2>Definições Fundamentais</h2>
                                <span>Conceitos essencias de Gestão de Projectos</span>
                            </div>

                            <div><IoIosArrowDown /></div>
                        </div>

                    </div>
                </div>

                <div className={styles.guiaMetodologia}>
                    <div className={styles.guiaMetodologiaOne}>
                        <div className={styles.MetodologiaIcone}><FaRegFileAlt /></div>

                        <div className={styles.guiaMetodologiaText}>
                            <div>
                                <h2>Definições Fundamentais</h2>
                                <span>Conceitos essencias de Gestão de Projectos</span>
                            </div>

                            <div><IoIosArrowDown /></div>
                        </div>

                    </div>
                </div>

                <div className={styles.guiaMetodologia}>
                    <div className={styles.guiaMetodologiaOne}>
                        <div className={styles.MetodologiaIcone}><FaRegFileAlt /></div>

                        <div className={styles.guiaMetodologiaText}>
                            <div>
                                <h2>Definições Fundamentais</h2>
                                <span>Conceitos essencias de Gestão de Projectos</span>
                            </div>

                            <div><IoIosArrowDown /></div>
                        </div>

                    </div>
                </div>


            </div>


            <Footer />

        </div>

    )
}

export default Guia
