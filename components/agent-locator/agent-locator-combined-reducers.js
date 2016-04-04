import { combineReducers } from 'redux';
import agentDetailsReducer from './agent-details-reducer';
import latLongReducer from './lat-long-reducer';
import changeStoreActivationReducer from './change-store/change-store-activation-reducer'
import suggestionsReducer from './change-store/suggestions-reducer'
import valueReducer from './change-store/value-reducer'

const AgentLocatorCombinedReducers = combineReducers ({
    agentDetailsReducer,
    latLongReducer,
    changeStoreActivationReducer,
    suggestionsReducer,
    valueReducer
})

export default AgentLocatorCombinedReducers;
