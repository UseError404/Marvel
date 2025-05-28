import {Navigation} from "../componets/indes";
import {AppRoutes} from "./router/AppRoutes.jsx";

import './style.scss'


function App() {
  return (
    <div className='app'>
        <Navigation/>
        <AppRoutes/>
    </div>
  )
}

export default App
