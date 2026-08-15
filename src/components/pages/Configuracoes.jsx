
import { useState } from 'react'

import styles from './Configuracoes.module.css'

import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";

const Configuracoes = () => {

    const [email, setEmail] = useState(true);
    const [push, setPush] = useState(true);
    const [tarefas, setTarefas] = useState(true);
    const [relatorios, setRelatorios] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [twoFA, setTwoFA] = useState(false);
    const [method, setMethod] = useState("email");

    const [theme, setTheme] = useState("padrao");
    const [language, setLanguage] = useState("padrao");
    const [timezone, setTimezone] = useState("padrao");

    const [dateFormat, setDateFormat] = useState("padrao");
    const [currency, setCurrency] = useState("padrao");

    return (

        <div>

            <div className={styles.settings}>

                <div className={styles.settingsOne}>
                    <h2>Configurações</h2>
                    <span>Gerencie as configurações da sua conta e preferência</span>
                </div>

                <div className={styles.settingsTwo}>
                    <div className={styles.settingsList}><CgProfile /> Perfil</div>
                    <div className={styles.settingsList}><IoNotificationsOutline /> Notificações</div>
                    <div className={styles.settingsList}><AiOutlineSecurityScan /> Segurança</div>
                    <div className={styles.settingsList}><GrSystem /> Sistema</div>
                    <div className={styles.settingsList}><IoColorPaletteOutline /> Aparência</div>
                </div>

                <div className={styles.settingsPerfil}>
                    <div>
                        <h3>Informações do Perfil</h3>
                    </div>

                    <div className={styles.settingsPerfilOne}>
                        <span>Foto</span>
                        <div>
                            <button>Alterar Foto</button>
                            <div>JPG. PNG, máximo 2MB</div>
                        </div>
                    </div>
                </div>

                <div className={styles.settingsForm}>
                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='insira o seu nome' />
                    </div>

                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" placeholder='insira o seu sobrenome' />
                    </div>

                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Ex.: paixaojose@mail.com' />
                    </div>

                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Telefone</label>
                        <input type="text" placeholder='insira o seu telefone' />
                    </div>

                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Função</label>
                        <input type="text" placeholder='insira a sua função' />
                    </div>

                    <div className={styles.settingsLabel}>
                        <label htmlFor="">Departamento</label>
                        <input type="text" placeholder='insira o nome do departamento...' />
                    </div>


                </div>

                <div className={styles.notificationsCard}>

                    <h3>Preferências de Notificação</h3>

                    <span className={styles.notificationsSubtitle}>
                        Escolha como e quando você deseja receber notificações
                    </span>

                    {/* EMAIL */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Notificações por Email</h4>
                            <p>Receba atualizações importantes por email</p>
                        </div>

                        <div
                            className={`${styles.switch} ${email ? styles.active : ""
                                }`}
                            onClick={() => setEmail(!email)}
                        >
                            <div className={styles.circle}></div>
                        </div>
                    </div>

                    {/* PUSH */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Notificações Push</h4>
                            <p>Receba notificações instantâneas no navegador</p>
                        </div>

                        <div
                            className={`${styles.switch} ${push ? styles.active : ""
                                }`}
                            onClick={() => setPush(!push)}
                        >
                            <div className={styles.circle}></div>
                        </div>
                    </div>

                    {/* TAREFAS */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Lembretes de Tarefas</h4>
                            <p>Lembretes para tarefas próximas do prazo</p>
                        </div>

                        <div
                            className={`${styles.switch} ${tarefas ? styles.active : ""
                                }`}
                            onClick={() => setTarefas(!tarefas)}
                        >
                            <div className={styles.circle}></div>
                        </div>
                    </div>

                    {/* RELATÓRIOS */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Relatórios Semanais</h4>
                            <p>Resumo semanal de actividades e progresso</p>
                        </div>

                        <div
                            className={`${styles.switch} ${relatorios ? styles.active : ""
                                }`}
                            onClick={() => setRelatorios(!relatorios)}
                        >
                            <div className={styles.circle}></div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={() => {
                                console.log({
                                    email,
                                    push,
                                    tarefas,
                                    relatorios,
                                });
                            }}
                        >
                            Salvar Preferências
                        </button>
                    </div>

                </div>

                <div className={styles.passwordCard}>

                    <h3>Alterar Senha</h3>

                    <span className={styles.passwordSubtitle}>
                        Atualize sua senha para manter sua conta segura
                    </span>

                    <div className={styles.passwordForm}>
                        <div className={styles.inputGroup}>
                            <label>Senha Atual</label>
                            <input
                                type="password"
                                placeholder="Digite sua senha atual"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Nova Senha</label>
                            <input
                                type="password"
                                placeholder="Digite a nova senha"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Confirmar Nova Senha</label>
                            <input
                                type="password"
                                placeholder="Confirme a nova senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={() => {
                                console.log({
                                    currentPassword,
                                    newPassword,
                                    confirmPassword,
                                });
                            }}
                        >
                            Atualizar Senha
                        </button>
                    </div>

                </div>


                <div className={styles.securityCard}>

                    <h3>Autenticação de Dois Fatores</h3>

                    <span className={styles.securitySubtitle}>
                        Adicione uma camada extra de segurança à sua conta
                    </span>

                    {/* 2FA SWITCH */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Ativar 2FA</h4>
                            <p>Exigir código adicional ao fazer login</p>
                        </div>

                        <div
                            className={`${styles.switch} ${twoFA ? styles.active : ""}`}
                            onClick={() => setTwoFA(!twoFA)}
                        >
                            <div className={styles.circle}></div>
                        </div>
                    </div>

                    {/* MÉTODO */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Método de Verificação</h4>
                            <p>Escolha como receber o código de segurança</p>
                        </div>

                        <select
                            className={styles.select}
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="authenticator">App Autenticador</option>
                        </select>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={() => {
                                console.log({
                                    twoFA,
                                    method,
                                });
                            }}
                        >
                            Salvar Segurança
                        </button>
                    </div>

                </div>

                <div className={styles.interfaceCard}>

                    <h3>Personalização de Interface</h3>

                    <span className={styles.interfaceSubtitle}>
                        Ajuste o tema, idioma e fuso horário da aplicação
                    </span>

                    {/* TEMA */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Tema</h4>
                            <p>Escolha o visual da aplicação</p>
                        </div>

                        <select
                            className={styles.select}
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            <option value="padrao">Padrão</option>
                            <option value="claro">Claro</option>
                            <option value="escuro">Escuro</option>
                        </select>
                    </div>

                    {/* IDIOMA */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Idioma</h4>
                            <p>Defina o idioma da interface</p>
                        </div>

                        <select
                            className={styles.select}
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="padrao">Padrão</option>
                            <option value="pt">Português</option>
                            <option value="en">Inglês</option>
                        </select>
                    </div>

                    {/* FUSO HORÁRIO */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Fuso Horário</h4>
                            <p>Configure o horário da aplicação</p>
                        </div>

                        <select
                            className={styles.select}
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                        >
                            <option value="padrao">Padrão</option>
                            <option value="africa-luanda">Africa/Luanda</option>
                            <option value="europe-lisbon">Europa/Lisboa</option>
                            <option value="america-sao-paulo">America/São Paulo</option>
                        </select>
                    </div>

                    {/* BOTÃO */}
                    <div className={styles.actions}>
                        <button
                            onClick={() => {
                                console.log({
                                    theme,
                                    language,
                                    timezone,
                                });
                            }}
                        >
                            Salvar Preferências
                        </button>
                    </div>

                </div>

                <div className={styles.systemCard}>

                    <h3>Informações do Sistema</h3>

                    <span className={styles.systemSubtitle}>
                        Dados gerais da aplicação
                    </span>

                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Versão</h4>
                            <p>1.0</p>
                        </div>
                    </div>

                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Região</h4>
                            <p>Angola</p>
                        </div>
                    </div>

                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Direitos Reservados</h4>
                            <p>Eng. Paixão António</p>
                        </div>
                    </div>

                </div>


                <div className={styles.advancedCard}>

                    <h3>Configurações Avançadas</h3>

                    <span className={styles.advancedSubtitle}>
                        Preferências técnicas do sistema
                    </span>

                    {/* FORMATO DATA */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Formato da Data</h4>
                            <p>Como as datas serão exibidas</p>
                        </div>

                        <select
                            className={styles.select}
                            value={dateFormat}
                            onChange={(e) => setDateFormat(e.target.value)}
                        >
                            <option value="padrao">Padrão</option>
                            <option value="dd-mm-yyyy">Dia-Mês-Ano</option>
                            <option value="mm-dd-yyyy">Mês-Dia-Ano</option>
                        </select>
                    </div>

                    {/* MOEDA */}
                    <div className={styles.notificationRow}>
                        <div>
                            <h4>Moeda</h4>
                            <p>Formato de exibição monetária</p>
                        </div>

                        <select
                            className={styles.select}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="padrao">Padrão</option>
                            <option value="kz">0,00 Kz</option>
                            <option value="usd">$ 0.00</option>
                            <option value="eur">€ 0.00</option>
                        </select>
                    </div>

                    {/* BOTÃO */}
                    <div className={styles.actions}>
                        <button
                            onClick={() => {
                                console.log({
                                    dateFormat,
                                    currency,
                                });
                            }}
                        >
                            Salvar Configurações
                        </button>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Configuracoes
