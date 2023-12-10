import React from "react";
import styles from './DataCard.module.css';
import MyButton from "../myButton/MyButton";
import ItemCard from "../itemCard/ItemCard";

function DataCard(props) {
    return (
        <ItemCard
            key={props.todo.id}
            className={styles.root}
            onClick={() => props.onViewTodo(props.todo.id)}
        >
            <p className={styles.text}>{props.todo.text}</p>
            <div className={styles.bottomBar}>
                <MyButton
                    className={styles.btnDrop}
                    onClick={() => props.onDeleteTodo(props.todo.id)}
                >
                    УДАЛИТЬ
                </MyButton>
                <MyButton
                    className={props.todo.isDone ? styles.btnDrop : styles.btnDone}
                    onClick={() => props.onSwitchStatusTodo(props.todo.id)}
                >
                    {props.todo.isDone ? 'ВЕРНУТЬ' : 'ГОТОВО'}
                </MyButton>
            </div>
        </ItemCard>
    );
}

export default DataCard;
