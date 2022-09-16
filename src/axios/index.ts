import axios from 'axios'

export const service = axios.create({
    baseURL: 'http://localhost:5051/api',
    timeout: 5000,
})


// 请求拦截
