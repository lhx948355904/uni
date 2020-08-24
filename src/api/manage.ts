import axios from "axios"

const http = axios.create({
    timeout: 1000 * 60,
    baseURL: "/api"
})

export function postAction(url:string,params:object){
    return http({
        url:url,
        method:"post",
        data:params
    })
}

export function getAction(url:string,params:object){
    return http({
        url:url,
        method:"get",
        params:params
    })
}

export function httpAction(url:string,params:object,method:any){
    return http({
        url:url,
        method:method,
        params:params
    })
}