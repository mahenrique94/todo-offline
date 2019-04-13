import React from 'react'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { persistedStore, store } from '../store'

import Loading from '../components/loading'
import Todo from '../components/todo'

import './App.css'

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistedStore}>
            <main className="App">
                <Todo />
            </main>
        </PersistGate>
    </Provider>
)

export default App
