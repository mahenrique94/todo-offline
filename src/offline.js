import { http } from './http'

import 'offline-js'

window.Offline.on('up', () => http.get('/health-check'))
