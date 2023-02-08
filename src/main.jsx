import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// document.querySelectorAll('.navbar-burger')[0].addEventListener('click', ()=>{
//   console.log('test')
// })