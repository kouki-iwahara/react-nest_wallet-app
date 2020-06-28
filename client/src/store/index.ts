import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { EventListeners } from '../application/listener'
import { AnyAction } from 'typescript-fsa'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import signinModule from './signin/module'

export type AppState = ReturnType<typeof reducers>

// reducer
const application = {
  signup: signinModule.reducer,
}
const reducers = combineReducers(application)
const rootReducer = (state: any, action: any) => {
  return reducers(state, action)
}

// epic
const rootEpic = combineEpics(EventListeners)
const epicmiddleware = createEpicMiddleware<AnyAction, AnyAction, AppState>()

// store
export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(epicmiddleware))
  epicmiddleware.run(rootEpic)
  return store
}
