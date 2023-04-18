import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';

import { Router } from "./router";
import { AppStore } from './stores/appStore';

import './global.sass'
import './styles/index.sass'
import './styles/header.sass'
import './styles/card.sass'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
const App = () => {
    return <>
        <React.StrictMode>
            <Provider store={AppStore}>
                <RouterProvider router={Router} />
            </Provider>
        </React.StrictMode>
    </>
};

root.render(<App />);