import localForage from 'localforage'
import thunk from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import { reducers } from './reducers'

localForage.config({
    name: 'tpt-offline',
    storeName: 'tpt_offline'
})

const persistConfig = {
    key: 'todo-offline',
    storage: localForage
}

const persistedReducers = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducers, applyMiddleware(thunk))
const persistedStore = persistStore(store)

export { persistedStore, store }