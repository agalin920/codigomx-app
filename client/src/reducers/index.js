import { combineReducers } from 'redux';
import postReducer from './postReducer';
import responseReducer from './responseReducer';

export default combineReducers({
  postReducer,
  responseReducer
})