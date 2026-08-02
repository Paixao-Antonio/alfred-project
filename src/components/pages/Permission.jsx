
import React from 'react'

import CardTitle from '../formulario/forma/CardTitle'

import Pesquisar from './Pesquisar'

import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";
import { HiLockClosed } from "react-icons/hi";

import styles from './Permission.module.css'

import { FaFolder, FaEye, FaPen, FaTrash, FaUserShield, FaUsers } from "react-icons/fa";

const Permission = () => {
    return (

        <div>

            <Pesquisar />

            <CardTitle
                header="Controle de Acesso"
                title="Gestão de Permissões"
                descricao="Configure níveis de acesso para Admin e Membros"
                variante='onbutton'
            />

            <div className={styles.DivPermission}>

                <div className={styles.DivPermissionTop}>
                    <h2>Matriz das Permissões</h2>
                    <p>Configure o que cada perfil pode fazer no sistema</p>
                </div>

                <div className={styles.DivPermissionHeader}>
                    <div>Módulo</div>
                    <div>Acção</div>
                    <div>Descrição</div>

                    <div className={styles.DivPermissionRole}>
                        <FaUserShield className={styles.DivPermissionRoleOne} />
                        <span>Admin</span>
                    </div>

                    <div className={styles.DivPermissionRole}>
                        <FaUser className={styles.DivPermissionRoleTwo} />
                        <span>Membro</span>
                    </div>
                </div>


                <div className={styles.DivPermissionRow}>

                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Projectos</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Vizualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver lista e detalhes de projectos
                    </div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active} ${styles.DivPermissionSwitchAMove} `}>
                        <input type="checkbox" />
                    </div>

                    <div className={`${styles.DivPermissionSwitch} `}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>
                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Projectos</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Green} />
                        <span>Criar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Criar Novos Projectos
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>
                    <div className={styles.DivPermissionSwitch}></div>

                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Projectos</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaFolder className={styles.Green} />
                        <span>Editar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Editar qualquer campo
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>
                    <div className={styles.DivPermissionSwitch}></div>

                </div>



                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Projectos</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaFolder className={styles.Red} />
                        <span>Excluir</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Excluir projectos
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>

                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Tarefas</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver tarefas do projecto
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>

                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Tarefas</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver tarefas do projecto
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>




                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Tarefas</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver tarefas do projecto
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>



                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Tarefas</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver tarefas do projecto
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Orçamento</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Editar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Alterar o valor do orçamento
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>



                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Equipe</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver membros da equipe
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Equipe</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Remover/Adicionar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Gerenciar membros da equipe
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Relatórios</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Visualizar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Ver relatórios básicos
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>


                <div className={styles.DivPermissionRow}>
                    <div className={styles.DivPermissionModule}>
                        <FaFolder className={styles.FolderIcon} />
                        <span>Relatórios</span>
                    </div>

                    <div className={styles.DivPermissionAcao}>
                        <FaEye className={styles.Blue} />
                        <span>Explorar</span>
                    </div>

                    <div className={styles.DivPermissionDescricao}>
                        Baixar relatórios completos
                    </div>

                    <div className={styles.DivPermissionSwitch}></div>

                    <div className={`${styles.DivPermissionSwitch} ${styles.active}`}>
                        <div className={styles.DivPermissionCircle}></div>
                    </div>

                </div>

            </div>

            <div className={styles.DivUsuario}>

                <div className={styles.CardUsuario}>

                    <div className={styles.DivUsuarioOne}>
                        <div className={styles.DivUsuarioIcone}>M</div>
                        <div>
                            <h3>Paixao Antonio</h3>
                            <span>paixao@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Função</div>
                        <div className={styles.DivFuncionIcone}>Administrador</div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Projectos</div>
                        <div className={styles.DivFuncionNumber}>8</div>
                    </div>

                    <div className={styles.DivFuncionSeparador}></div>

                    <div className={styles.DivFuncionAcesso}>Acesso Total</div>

                </div>

                <div className={styles.CardUsuario}>

                    <div className={styles.DivUsuarioOne}>
                        <div className={styles.DivUsuarioIcone}>M</div>
                        <div>
                            <h3>Paixao Antonio</h3>
                            <span>paixao@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Função</div>
                        <div className={styles.DivFuncionIcone}>Administrador</div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Projectos</div>
                        <div className={styles.DivFuncionNumber}>8</div>
                    </div>

                    <div className={styles.DivFuncionSeparador}></div>

                    <div className={styles.DivFuncionAcesso}>Acesso Total</div>

                </div>

                <div className={styles.CardUsuario}>

                    <div className={styles.DivUsuarioOne}>
                        <div className={styles.DivUsuarioIcone}>M</div>
                        <div>
                            <h3>Paixao Antonio</h3>
                            <span>paixao@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Função</div>
                        <div className={styles.DivFuncionIcone}>Administrador</div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Projectos</div>
                        <div className={styles.DivFuncionNumber}>8</div>
                    </div>

                    <div className={styles.DivFuncionSeparador}></div>

                    <div className={styles.DivFuncionAcesso}>Acesso Total</div>

                </div>

                <div className={styles.CardUsuario}>

                    <div className={styles.DivUsuarioOne}>
                        <div className={styles.DivUsuarioIcone}>M</div>
                        <div>
                            <h3>Paixao Antonio</h3>
                            <span>paixao@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Função</div>
                        <div className={styles.DivFuncionIcone}>Administrador</div>
                    </div>

                    <div className={styles.DivFuncion}>
                        <div>Projectos</div>
                        <div className={styles.DivFuncionNumber}>8</div>
                    </div>

                    <div className={styles.DivFuncionSeparador}></div>

                    <div className={styles.DivFuncionAcesso}>Acesso Total</div>

                </div>

            </div>

            <div className={styles.DivAviso}>
                <div className={styles.DivAvisoOne}>
                    <span>icone</span>
                    <h2>Aviso de segurança</h2>
                </div>

                <p>As alterações nas permissões entram em vigor imediatamente! Certifique-se que as permissões estão correctamente configuradas antes de salvar.</p>

                <div className={styles.DivAvisoList}>
                    <ul>
                        <li>Mantenha sempre pelo menos um usuário administrador.</li>
                        <li>Membros não tem acesso a informações financeiras do projecto.</li>
                        <li>Revise periodicamente as permissões de cada perfil.</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Permission
