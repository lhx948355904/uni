import axios from "axios"

const http = axios.create({
    timeout: 1000 * 60,
    baseURL: "http://localhost:3000/api"
})

export function postAction(url,params){
    return http({
        url:url,
        method:"post",
        data:params
    })
}

export function getAction(url,params){
    return http({
        url:url,
        method:"get",
        params:params
    })
}

export function httpAction(url,params,method){
    return http({
        url:url,
        method:method,
        params:params
    })
}