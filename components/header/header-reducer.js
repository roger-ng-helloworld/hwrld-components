import { combineReducers } from 'redux';
import MainReducer from './main/main-reducer';
import SecondaryReducer from './secondary/secondary-reducer';

const HeaderReducer = combineReducers ({
    mainReducer: MainReducer,
    secondaryReducer: SecondaryReducer
})

export default HeaderReducer;