import { combineReducers } from 'redux';
import IssueReducer from './issueReducer'

const rootReducer = combineReducers({
    issue: IssueReducer
});

export default rootReducer;