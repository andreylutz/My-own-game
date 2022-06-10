import { combineReducers } from 'redux';
import { questionReducer } from './questions.reducer';

const rootReducer = combineReducers({
  quest: questionReducer,
});

export default rootReducer;
