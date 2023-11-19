import React from "react";
import styles from './AddCard.module.css';
import {AddIcon} from "../icons/Icons";
import ItemCard from "../itemCard/ItemCard";

function AddCard(props) {
    return (
        <ItemCard
            className={styles.root}
            onClick={props.onClick}
        >
            <AddIcon/>
        </ItemCard>
    );
}

export default AddCard;
