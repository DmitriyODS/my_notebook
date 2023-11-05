import "./app.css";
import PageSlider from "./components/pageSlider/PageSlider";
import MyButton from "./components/myButton/MyButton";
import {useState} from "react";
import ItemCard from "./components/itemCard/ItemCard";
import {createPortal} from "react-dom";
import DialogModal from "./components/modal/DialogModal";

const sectionItems = [
    {
        id: 0,
        title: 'ВСЕ'
    },
    {
        id: 1,
        title: 'НОВЫЕ'
    },
    {
        id: 2,
        title: 'ГОТОВО'
    }
];

function App() {
    const [curSection, setCurSection] = useState(0);
    const [todoItems, setTodoItems] = useState([]);
    const [isShowModal, setShowModal] = useState(false)
    const [curTodo, setCurTodo] = useState(null);

    const switchStatusTodo = (todoID) => {
        const newTodo = todoItems.map(it => {
            if (it.id === todoID) {
                return {...it, isDone: !it.isDone};
            }

            return it;
        })

        setTodoItems(newTodo);
    }

    const deleteTodo = (todoID) => {
        const newTodo = todoItems.filter(it => it.id !== todoID);

        setTodoItems(newTodo);
    }

    const clearTodos = () => {
        setTodoItems([]);
    }

    const viewTodo = (todoID) => {
        setCurTodo(todoItems.find(it => it.id === todoID));
        setShowModal(true);
    }

    const closeDialog = () => {
        setCurTodo(null);
        setShowModal(false)
    }

    const addNewTodo = (todoText) => {
        let lastID = 1;
        if (todoItems.length > 0) {
            lastID = todoItems[todoItems.length - 1].id + 1;
        }

        const newTodo = {
            id: lastID,
            text: todoText,
            isDone: false
        };

        setTodoItems(todoItems.concat(newTodo));
        setShowModal(false);
    }

    return (
        <div className={'home_page'}>
            {isShowModal && createPortal(
                <DialogModal
                    curTodo={curTodo}
                    onCloseDialog={closeDialog}
                    addNewTodo={addNewTodo}
                />, document.body)}
            <header className={'home_header'}>
                <h1 className={'home_title'}>MY NOTEBOOK</h1>
                <PageSlider
                    items={sectionItems}
                    selectedID={curSection}
                    changeSection={setCurSection}
                />
                <MyButton
                    className={'btn_clear'}
                    onClick={() => clearTodos()}
                >
                    ОЧИСТИТЬ
                </MyButton>
            </header>
            <main className={'home_main'}>
                <div className={'home_items'}>
                    <ItemCard className={'btn_create'} onClick={() => setShowModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="6rem" viewBox="0 0 24 24" width="6rem"
                             fill="#ffffff">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </svg>
                    </ItemCard>
                    {
                        todoItems.map((todo) => {
                            if (curSection === 2 && !todo.isDone) {
                                return null;
                            }

                            if (curSection === 1 && todo.isDone) {
                                return null;
                            }

                            return (
                                <ItemCard
                                    key={todo.id}
                                    className={'home_todo_content'}
                                    onClick={() => viewTodo(todo.id)}
                                >
                                    <p className={'text-ellipsis'}>{todo.text}</p>
                                    <div className={'todo_tools_bar'}>
                                        <MyButton
                                            className={'btn_drop'}
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            УДАЛИТЬ
                                        </MyButton>
                                        <MyButton
                                            className={todo.isDone ? 'btn_drop' : 'btn_done'}
                                            onClick={() => switchStatusTodo(todo.id)}
                                        >
                                            {todo.isDone ? 'ОТКРЫТЬ' : 'ГОТОВО'}
                                        </MyButton>
                                    </div>
                                </ItemCard>
                            );
                        })
                    }
                </div>
            </main>
        </div>
    );
}

export default App;
