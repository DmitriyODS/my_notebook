export function SwitchStatusTodoByID(id, items) {
    return items.map(it => {
        if (it.id === id) {
            return {...it, isDone: !it.isDone};
        }

        return it;
    });
}

export function SwitchStatusAllTodos(items) {
    return items.map(it => ({...it, isDone: !it.isDone}));
}

export function DeleteTodoByID(id, items) {
    return items.filter(it => it.id !== id);
}

export function GetTodoByID(id, items) {
    return items.find(it => it.id === id);
}

export function AddNewTodoInItems(text, items) {
    let lastID = 1;
    if (items.length > 0) {
        lastID = items[items.length - 1].id + 1;
    }

    const newTodo = {
        id: lastID, text: text, isDone: false
    };

    return items.concat(newTodo);
}
