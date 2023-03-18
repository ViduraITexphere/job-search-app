import { combineReducers, createStore } from 'redux';
import storyReducer from '../Reducers/Reducer.jsx';


const rootReducer = combineReducers({
  storyReducer: storyReducer,
  // other reducers go here
});

const store = createStore(rootReducer);
export default store;
