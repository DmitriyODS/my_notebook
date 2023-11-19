import React from "react";
import styles from "./ButtonBox.module.css";

function ButtonBox(props) {
    return (
        <div className={styles.root}>
            {props.children}
        </div>
    );
}

export default ButtonBox;
