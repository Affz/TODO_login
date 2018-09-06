import { combineReducers } from 'redux';
import ToDoReducer from '../HelloWorld/Reducers/ToDoReducers';

export const mainReducer = combineReducers({
  HelloWorld: ToDoReducer
  });