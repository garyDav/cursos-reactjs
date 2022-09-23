/*
// 00-init
import ReactDOM from 'react-dom/client'

const saludo = <h1>Hola Mundo</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render( saludo )
*/

import ReactDOM from 'react-dom/client'
import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render( <CounterApp value={10} /> )

