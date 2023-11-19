import React from "react";
import style from './AppHeader.module.css';

function AppHeader(props) {
    return (
        <header className={style.root}>
            {props.children}
        </header>
    );
}

export default AppHeader;
