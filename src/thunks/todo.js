import uuid from 'uuid'

import { todoApis } from '../apis/todo'

import { todoActions } from '../actions/todo'

const todoThunks = {
    add: title => async dispatch => {
        const newTask = {
            id: uuid(),
            title
        }
        dispatch(todoActions.add(newTask))
        await todoApis.add(newTask)
    },
    getAll: () => async dispatch => {
        const { data } = await todoApis.getAll()
        dispatch(todoActions.getAll(data))
    }
}


export { todoThunks }