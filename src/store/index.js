import { createStore, combineReducers, applyMiddleware } from 'redux';
import issueReducer from '../reducer/issueReducer'
import reduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
    issue: issueReducer
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));