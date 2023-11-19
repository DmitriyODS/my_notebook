import React from "react";
import styles from './AppBody.module.css';

function AppBody(props) {
    return (
        <main className={styles.root}>
            {props.children}
        </main>
    );
}

export default AppBody;
