import {useState} from "react";
import {
    actionHideDialog,
    actionShowDialog,
    useDialogDispatch
} from "./state/dialogProvider/DialogProvider";
import DataCard from "./components/dataCard/DataCard";
import {
    AddNewTodoInItems,
    DeleteTodoByID,
    GetTodoByID,
    SwitchStatusAllTodos,
    SwitchStatusTodoByID
} from "./utils";
import PageSlider from "./components/pageSlider/PageSlider";
import DialogModal from "./components/modal/DialogModal";
import AppHeader from "./components/appHeader/AppHeader";
import AppTitle from "./components/appTitle/AppTitle";
import AppButton from "./components/appButton/AppButton";
import ButtonBox from "./components/buttonBox/ButtonBox";
import AppBody from "./components/appBody/AppBody";
import AddCard from "./components/addCard/AddCard";
import App from "./components/app/App";


function Main() {
    // создаём переменные для хранения данных
    const [curFilter, setCurFilter] = useState(0);
    const [curTodo, setCurTodo] = useState(null);
    const [todoItems, setTodoItems] = useState([]);

    // получаем функцию для управления отображением окна
    const dialogDispatch = useDialogDispatch();

    // функция для изменения статуса карточки
    const onSwitchStatusTodo = (todoID) => {
        const newTodoItems = SwitchStatusTodoByID(todoID, todoItems);
        setTodoItems(newTodoItems);
    }

    // функция удаления карточки
    const onDeleteTodo = (todoID) => {
        const newTodoItems = DeleteTodoByID(todoID, todoItems);
        setTodoItems(newTodoItems);
    }

    // функция удаления всех карточек
    const onClearTodos = () => {
        setTodoItems([]);
    }

    // функция отображения окна с содержимым карточки
    const onViewTodo = (todoID) => {
        const curTodo = GetTodoByID(todoID, todoItems);
        setCurTodo(curTodo);
        dialogDispatch(actionShowDialog);
    }

    // функция закрытия диалогового окна
    const onCloseDialog = () => {
        setCurTodo(null);
        dialogDispatch(actionHideDialog);
    }

    // функция создания новой карточки
    const onAddNewTodo = (todoText) => {
        const newTodoItems = AddNewTodoInItems(todoText, todoItems);
        setTodoItems(newTodoItems);
        dialogDispatch(actionHideDialog);
        setCurFilter(1);
    }

    // функция отображения диалога созданя новой карточки
    const onShowDialogCreateCard = () => {
        dialogDispatch(actionShowDialog);
    }

    // функция для отрисовки одной карточки
    const getTodo = (todo) => {
        if (curFilter === 2 && !todo.isDone) {
            return null;
        }

        if (curFilter === 1 && todo.isDone) {
            return null;
        }

        return (
            <DataCard
                todo={todo}
                onViewTodo={onViewTodo}
                onDeleteTodo={onDeleteTodo}
                onSwitchStatusTodo={onSwitchStatusTodo}
            />
        );
    }

    // функция для отрисовки существующих карточек
    const renderItems = () => {
        return todoItems.map(getTodo);
    }

    // функция для изменения статуса всем карточкам
    // TODO: здесь мы напишем свою функцию изменения статуса всех карточек

    // возвращаем готовую разметку из функции
    // TODO: здесь мы будем писать свой код разметки
    return (
        <div>
            Здесь пока ничего нет, напиши разметку :)
        </div>
    );
}

export default Main;
