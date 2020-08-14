const user = {
    state:{
        token:"",
        username:"",
    },
    mutation:{
        SET_TOKEN(state,token){
            state.token = token;
        }
    },
    getters:{
        token:state => {
            return state.token
        }
    },

}