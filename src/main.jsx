import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
// React Router
import { BrowserRouter } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import  CarReducer from './CarReducer'
// Reducers
const store = configureStore({
  reducer: {
    cars: CarReducer
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
