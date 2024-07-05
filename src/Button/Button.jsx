import React from "react";
import styles from './Button.module.css'

export const Button = (props)=>{
    console.log(props)
    return(
        <button className={styles.btn}>{props.btnText}<i class="fa-solid fa-arrow-right"></i></button>
    )
}