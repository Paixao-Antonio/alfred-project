
import styles from './Login.module.css'

const Login = ({ name }) => {
    
    return (
        <>
            <button className={styles.Login}>{ name }</button>
        </>

    )
}

export default Login
