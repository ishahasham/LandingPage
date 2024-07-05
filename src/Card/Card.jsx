import React from 'react'
import styles from './Card.module.css'

const Card = ({desc,title,imgSrc,d1,t1}) => {

  return (
    
      <div className={styles.card}>
        <h1 className={styles.d1}>{d1}</h1>
        <p>{t1}</p>
        <img className={styles.cardImg} src={imgSrc} alt="" /> <br />
        <h6>{desc}</h6>
        <p>{title} <i class="fa-solid fa-arrow-right"></i></p>
    </div>
    
  )   
}

export default Card
