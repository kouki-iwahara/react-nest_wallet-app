import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './presentation/routers/AppRouter'
import { Provider } from 'react-redux'
import { configureStore } from './store'

// FIXME: 13行目で型エラーが起きた為、一旦anyにした
const store: any = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
