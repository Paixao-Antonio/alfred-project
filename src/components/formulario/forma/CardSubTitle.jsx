
import React from 'react'
import styles from "./CardSubTitle.module.css"
import { FaSyncAlt } from "react-icons/fa";

const CardSubTitle = () => {
  return (

    <div className={styles.CardSubOne}>


      <div className={styles.Abc}>

        <div className={styles.CardSubTwo}>
          <h5>Total</h5>
          <div className={styles.CardSubThree}>
            <span className={styles.CardSpanNumber}>5</span>
            <FaSyncAlt className={styles.CardSubIcon} />
          </div>
          <span className={styles.CardSpanText}>projectos do sistema</span>
        </div>

         <div className={styles.CardSubTwo}>
          <h5>Total</h5>
          <div className={styles.CardSubThree}>
            <span className={styles.CardSpanNumber}>5</span>
            <FaSyncAlt className={styles.CardSubIcon} />
          </div>
          <span className={styles.CardSpanText}>projectos do sistema</span>
        </div>

         <div className={styles.CardSubTwo}>
          <h5>Total</h5>
          <div className={styles.CardSubThree}>
            <span className={styles.CardSpanNumber}>5</span>
            <FaSyncAlt className={styles.CardSubIcon} />
          </div>
          <span className={styles.CardSpanText}>projectos do sistema</span>
        </div>

         <div className={styles.CardSubTwo}>
          <h5>Total</h5>
          <div className={styles.CardSubThree}>
            <span className={styles.CardSpanNumber}>5</span>
            <FaSyncAlt className={styles.CardSubIcon} />
          </div>
          <span className={styles.CardSpanText}>projectos do sistema</span>
        </div>

      </div>

    </div>
  )
}

export default CardSubTitle
