import { login } from "@/api/api"

const user = {
    state:{
        token:"",
        username:"",
    },
    getters:{
        token:state => {
            return state.token
        }
    },
    mutation:{
        SET_TOKEN(state,token){
            state.token = token;
        },
        SET_NAME(state,{username}){
            state.username = username;
        }
    },
    actions:{
        ValidateLogin({commit},userInfo){
            login(userInfo).then(resp => {
                
            })
        }
    }

}