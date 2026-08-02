
import React from 'react'
import styles from './Chat.module.css'

import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineFilePresent } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";


import CardTitle from '../formulario/forma/CardTitle'



const Chat = () => {
    return (

        <div>

            <CardTitle
                icon={IoChatboxEllipsesOutline}
                header="Comunicação em tempo real"
                title="Chat"
                descricao="Converse com a sua equipe e acompanhe os projectos"
                variante='nada'
            />

            <div className={styles.cardChat}>

                <div className={styles.cardChatLeft}>
                    <div className={styles.cardChatLeftOne}>
                        <h4>Conversas</h4>
                        <span>01</span>
                    </div>

                    <div className={styles.cardChatLeftTwo}>
                        <input type="text" placeholder='buscar conversas' />
                    </div>

                    <div className={styles.cardChatLeftThree}>
                        <h3 className={styles.cardChatLeftThreeText}>Projecto de Gestão Escolar</h3>
                        <div>
                            <span>Id Project: 001</span>
                        </div>
                    </div>

                    <div className={styles.cardChatSeparador}></div>

                </div>




                <div className={styles.cardChatRigth}>

                    <div className={styles.cardChatRigthOne}>
                        <div className={styles.cardChatRigthTwo}>
                            <div className={styles.cardChatRigthIcone}>P</div>
                            <div className={styles.cardChatRigthIconeText}>
                                <h3>Projecto Gestão Escolar</h3>
                                <span>Online</span>
                            </div>
                        </div>

                        <div className={styles.cardChatRigthIconeTwo}>
                            <FiPhoneCall />
                            <IoVideocamOutline />
                        </div>

                    </div>


                    <div className={styles.chatContainer}>

                        {/* Mensagem enviada */}

                        <div className={`${styles.message} ${styles.sent}`}>
                            <div className={styles.avatar}>V</div>

                            <div className={styles.messageContent}>
                                <div className={`${styles.bubble} ${styles.sentBubble}`}>
                                    Bom dia Ana! Estamos com 85% de progresso.
                                    Falta apenas a integração com o backend.
                                </div>

                                <span className={`${styles.time} ${styles.right}`}>
                                    09:35
                                </span>
                            </div>
                        </div>

                        {/* Mensagem recebida */}
                        <div className={`${styles.message} ${styles.received}`}>
                            <div className={`${styles.avatar} ${styles.blue}`}>
                                C
                            </div>

                            <div className={styles.messageContent}>
                                <span className={styles.name}>
                                    Carlos Santos
                                </span>

                                <div className={`${styles.bubble} ${styles.receivedBubble}`}>
                                    Ótimo! A API já está pronta.
                                    Posso te passar a documentação agora.
                                </div>

                                <span className={styles.time}>
                                    10:15
                                </span>
                            </div>
                        </div>

                        {/* Mensagem enviada */}
                        <div className={`${styles.message} ${styles.sent}`}>
                            <div className={styles.avatar}>V</div>

                            <div className={styles.messageContent}>
                                <div className={`${styles.bubble} ${styles.sentBubble}`}>
                                    Perfeito Carlos! Por favor, envia.
                                    Vou começar a integração hoje à tarde.
                                </div>

                                <span className={`${styles.time} ${styles.right}`}>
                                    10:20
                                </span>
                            </div>
                        </div>

                        {/* Mensagem recebida */}
                        <div className={`${styles.message} ${styles.received}`}>
                            <div className={`${styles.avatar} ${styles.purple}`}>
                                A
                            </div>

                            <div className={styles.messageContent}>
                                <span className={styles.name}>
                                    Ana Silva
                                </span>

                                <div className={`${styles.bubble} ${styles.receivedBubble}`}>
                                    Excelente trabalho equipe! 👏
                                </div>

                                <span className={styles.time}>
                                    10:25
                                </span>
                            </div>
                        </div>

                        {/* Mensagem recebida */}
                        <div className={`${styles.message} ${styles.received}`}>
                            <div className={`${styles.avatar} ${styles.blue}`}>
                                C
                            </div>

                            <div className={styles.messageContent}>
                                <span className={styles.name}>
                                    Carlos Santos
                                </span>

                                <div className={`${styles.bubble} ${styles.receivedBubble}`}>
                                    O módulo de relatórios está quase pronto.
                                    Devemos finalizar até sexta.
                                </div>

                                <span className={styles.time}>
                                    10:45
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className={styles.chatSend}>
                        <div className={styles.chatSeparador}></div>
                        <div className={styles.chatSendOne}>
                            <div className={styles.chatSendIcon}>
                                <MdOutlineFilePresent />
                                <MdOutlineEmojiEmotions />
                            </div>
                            <div>
                                <input type="text" placeholder='Digite sua mensagem...' />
                            </div>
                            <div className={styles.chatSendIconTwo}>
                                <IoSendSharp />
                            </div>
                        </div>
                        <div className={styles.chatSendNote}>
                            <span>Pressione Enter para enviar ou Shift+Enter para quebra de linha</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.cardChatRodape}>
                <div className={styles.cardChatRodapeOne}>
                    <IoChatboxEllipsesOutline />
                    <span>Chat em tempo real</span>
                </div>
                <p className={styles.cardChatRodapeText}>Todas as mensagens são gravadas e sincronizadas automaticamente. O histórico completo fica disponível para todos os membros do projeto.</p>
            </div>


        </div>
    )
}

export default Chat
