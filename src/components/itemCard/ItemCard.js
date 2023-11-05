import styles from './ItemCard.module.css';

function ItemCard(props) {
    return (
        <div
            className={`${styles.root} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}

export default ItemCard;