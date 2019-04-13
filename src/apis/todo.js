import { http } from '../http'

const todoApis = {
    add: newTask => http.post('/tasks', newTask),
    getAll: () => http.get('/tasks')
}

export { todoApis }