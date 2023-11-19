import React from "react";
import styles from './App.module.css';

function App(props) {
    let colorBody = styles.blue;
    switch (props.color) {
        case "blue": {
            colorBody = styles.blue;
            break;
        }
        case "green": {
            colorBody = styles.green;
            break;
        }
        case "red": {
            colorBody = styles.red;
            break;
        }
        case "yellow": {
            colorBody = styles.yellow;
            break;
        }
    }

    return (
        <div className={`${colorBody} ${styles.root}`}>
            {props.children}
        </div>
    );
}

export default App;