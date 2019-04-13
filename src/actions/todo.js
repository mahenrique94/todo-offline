import { actions } from '../constants/actions'

const todoActions = {
    add: task => ({
        payload: task,
        type: actions.TODO_ADD
    }),
    getAll: tasks => ({
        payload: tasks,
        type: actions.TODO_GET_ALL
    }),
    remove: title => ({
        payload: title,
        type: actions.TODO_REMOVE
    })
}


export { todoActions }
