import React from "react";
import style from './AppTitle.module.css';

function AppTitle(props) {
    return (
        <h1 className={style.root}>{props.children}</h1>
    );
}

export default AppTitle;
