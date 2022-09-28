import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'

import { createStore } from 'redux'

const counterReducer = (state=0, action) =>{
  switch (action.type) {
    case 'INCREMENT':
      
      return state + 1
    
      case 'DECREMENT':
        return state - 1

        case 'ZERO':
          return 0
    default:
      return state
  }
}
const storeCounter= createStore(counterReducer)

//important method the store has is subscribe, which is used to create callback 
//functions the store calls whenever an action is dispatched to the store.

storeCounter.subscribe(() =>{
  console.log(storeCounter.getState())
})

const App =  () =>{
  return(
    <div>
      <div> {storeCounter.getState()}</div>
      <button onClick={e => storeCounter.dispatch({ type: 'INCREMENT' })}>Plus</button>
      <button onClick={e => storeCounter.dispatch({ type: 'ZERO' })}>Reset</button>
      <button onClick={e => storeCounter.dispatch({ type: 'DECREMENT' })}>Minus</button>
    </div>
  )
}


const root= ReactDOM.createRoot(document.getElementById('root'))
const renderApp= () => root.render(<App/>)

renderApp()
storeCounter.subscribe(renderApp)
/* ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
) */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

