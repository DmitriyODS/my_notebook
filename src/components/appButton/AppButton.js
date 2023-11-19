import React from "react";
import styles from './AppButton.module.css';
import MyButton from "../myButton/MyButton";

function AppButton(props) {
    let styleBtn = styles.btn_blue;
    switch (props.color) {
        case "green": {
            styleBtn = styles.btn_green;
            break;
        }
        case "red": {
            styleBtn = styles.btn_red;
            break;
        }
        case "yellow": {
            styleBtn = styles.btn_yellow;
            break;
        }
    }

    return (
        <MyButton
            className={styleBtn}
            onClick={props.onClick}
        >
            {props.title}
        </MyButton>
    );
}

export default AppButton;
