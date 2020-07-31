import {combineReducers} from 'redux';
import {QLUserReducer} from './QLUserReducer';

// store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi sẽ chứa các reducer cho nghiệp vụ(store con)
    QLUserReducer
})