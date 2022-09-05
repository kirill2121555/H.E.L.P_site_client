import axios from "axios";

const $host = axios.create({  
    baseURL: 'http://localhost:5000/'     //' https://serverrr.vercel.app/
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'            //' https://serverrr.vercel.app/
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const Host='https://serverrr.vercel.app/'//http://localhost:5000/

$authHost.interceptors.request.use(authInterceptor)

export {
    Host,
    $host,
    $authHost
}