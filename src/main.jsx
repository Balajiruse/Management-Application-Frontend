import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import booksreducer from './Reducers/booksreducer.js'
import { BrowserRouter } from 'react-router-dom'
import authorreducer from './Reducers/authorreducer.js'

const store=configureStore({
  reducer:{
    Bookdata:booksreducer,
    Authordata:authorreducer
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     <App />
    </Provider>
  </BrowserRouter>,
)