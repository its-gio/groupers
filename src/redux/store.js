import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import projectsReducer from './reducers/projectsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));