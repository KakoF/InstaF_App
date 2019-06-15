import axios from 'axios'

const api = axios.create({
    // SE TIVER USANDO EMULADOR   
    // baseURL:'http://localhost:3333'
    
    // SE TIVER USANDO POR USB
    baseURL: 'http://192.168.0.106:3333'

    // SE TIVER USANDO GENYMOTION
    // baseURL: 'http://10.0.3.2:3333'
})

export default api;