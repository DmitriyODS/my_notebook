import {createContext, useContext} from "react";
import {useImmerReducer} from "use-immer";

const DialogContext = createContext(false);
const DialogDispatchContext = createContext((data) => {
});

function dialogReducer(isShow, action) {
    if (action.type === "show") {
        isShow = true;
    } else if (action.type === "hide") {
        isShow = false;
    }

    return isShow;
}

export function DialogProvider(props) {
    const [isShow, dispatch] = useImmerReducer(dialogReducer, false);

    return (
        <DialogContext.Provider value={isShow}>
            <DialogDispatchContext.Provider value={dispatch}>
                {props.children}
            </DialogDispatchContext.Provider>
        </DialogContext.Provider>
    );
}

export function useDialog() {
    return useContext(DialogContext);
}

export function useDialogDispatch() {
    return useContext(DialogDispatchContext);
}

export const actionShowDialog = {
    type: "show"
}

export const actionHideDialog = {
    type: "hide"
}
