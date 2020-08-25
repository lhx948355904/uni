import { login } from "@/api/api"

const user = {
    state:{
        token:"",
        username:"",
    },
    getters:{
        
    },
    mutation:{
        SET_TOKEN(state:any,token:string){
            state.token = token;
        },
        SET_NAME(state:any,username:string){
            state.username = username;
        }
    },
    actions:{
        login({commit}:any,userInfo:object){
            return new Promise((resolve,reject) => {
                login(userInfo).then(resp => {
                    if(resp.data.msg){
                        //储存用户信息
                        commit("SET_NAME",resp.data.username)
                        commit("SET_TOKEN",resp.data.token)
                        uni.switchTab({
                            url:"/pages/index/index",
                        })
                        resolve(resp)
                    }else{
                        reject(resp)
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }

}

export default user;