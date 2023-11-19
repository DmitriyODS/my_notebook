import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import {DialogProvider} from "./state/dialogProvider/DialogProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DialogProvider>
            <Main/>
        </DialogProvider>
    </React.StrictMode>
);
