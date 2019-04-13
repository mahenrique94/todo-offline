import { combineReducers } from 'redux'

import { todoReducers } from './todo'

const reducers = combineReducers({
    todoReducers
})

export { reducers }