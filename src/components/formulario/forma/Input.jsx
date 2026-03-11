

import React from 'react'

import styles from './Input.module.css'

const Input = ({ type, text, name, placeholder }) => {

    return (

        <div>
            <div>

                <div className={styles.divLabel}>
                    <label htmlFor={name}>{text}</label>
                </div>

                <input className={styles.divInput}
                    type={type}
                    name={name}
                    placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input