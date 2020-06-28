import { combineEpics } from 'redux-observable'
import { signupEpics } from './pages'

export const EventListeners = combineEpics(signupEpics)
