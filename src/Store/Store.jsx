import { combineReducers, createStore } from 'redux';
import inputValuesReducer from '../Reducers/Reducer.jsx';


const rootReducer = combineReducers({
  inputValuesReducer: inputValuesReducer,
  // other reducers go here
});

const store = createStore(rootReducer);
export default store;
