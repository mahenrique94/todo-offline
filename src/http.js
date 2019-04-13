import axios from 'axios'
import axiosOffline from 'axios-offline'

const offlineAdapter = axiosOffline({
    defaultAdapter: axios.defaults.adapter,
    storageName: 'todo-requests'
})

const http = axios.create({
    adapter: offlineAdapter,
    baseURL: 'http://localhost:8080/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 30000
})

export { http }