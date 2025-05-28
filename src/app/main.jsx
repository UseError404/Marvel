import {StrictMode} from 'react'
import {BrowserRouter} from "react-router";
import {createRoot} from 'react-dom/client'

import App from './App.jsx'
import './reset.scss'
import '../shared/scss/global.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
