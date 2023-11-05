import styles from './DialogModal.module.css';
import MyButton from "../myButton/MyButton";
import {useState} from "react";

function DialogModal(props) {
    const isViewMode = props.curTodo !== null;
    const [textField, setTextField] = useState('');

    let title = 'Добавление заметки';
    if (isViewMode) {
        title = 'Просмотр заметки';
    }

    const renderView = () => {
        return (
            <div className={styles.body}>
                <p>{props.curTodo.text}</p>
            </div>
        );
    }

    const renderCreate = () => {
        return (
            <div className={styles.body}>
                <textarea
                    className={styles.textarea}
                    placeholder={'Текст новой заметки'}
                    value={textField}
                    onChange={(e) => setTextField(e.target.value)}
                />
                <div className={styles.toolbar}>
                    <MyButton
                        className={styles.btn_cancel}
                        onClick={props.onCloseDialog}
                    >
                        ОТМЕНА
                    </MyButton>
                    <MyButton
                        className={styles.btn_create}
                        disabled={textField === ''}
                        onClick={() => props.addNewTodo(textField)}
                    >
                        СОЗДАТЬ
                    </MyButton>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.root}>
            <div className={styles.window}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    <svg className={styles.btn_close}
                         xmlns="http://www.w3.org/2000/svg"
                         height="32px"
                         viewBox="0 0 24 24"
                         width="32px"
                         fill="#B03939"
                         onClick={props.onCloseDialog}
                    >
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </svg>
                </div>
                {
                    isViewMode ? renderView() : renderCreate()
                }
            </div>
        </div>
    );
}

export default DialogModal;