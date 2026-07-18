
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ name, to }) => {
    return (
        <Link to={to} className={styles.link}>
            <button className={styles.Login}>
                {name}
            </button>
        </Link>
    );
};

export default Login;