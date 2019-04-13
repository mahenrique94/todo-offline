import { actions } from '../constants/actions'

const INITIAL_STATE = {
    tasks: []
}

const todoReducers = (state = INITIAL_STATE, action) => {
    const { payload, type } = action
    const { tasks } = state
    switch (type) {
        case actions.TODO_ADD:
            return { ...state, tasks: [ ...tasks, payload ] }
        case actions.TODO_GET_ALL:
            return { ...state, tasks: [ ...payload ] }
        case actions.TODO_REMOVE:
            return { ...state, tasks: tasks.filter(({ title }) => title !== payload) }
        default:
            return state
    }
}

export { todoReducers }