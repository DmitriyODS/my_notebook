import styles from './MyButton.module.css';

function MyButton(props) {
    return (
        <button
            className={`${styles.root} ${props.className}`}
            onClick={(event) => {
                props.onClick();
                event.stopPropagation();
            }}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default MyButton;