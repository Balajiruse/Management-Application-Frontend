import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import redux from './Redux/redux.js'

const store=configureStore({
    reducer:{
        Dataupdater:redux
    }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
        
    </BrowserRouter>
)