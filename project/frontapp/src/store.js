import {createStore} from 'vuex' 
 
const store = createStore({ 
  state(){             //프로젝트 전체에서 공통으로 사용할 변수        
    return { count: 0, 
             email: '',
             loginYn:false  }    
  }, 
  mutations : {        //state를 변경하는 역할  
    increment(state) {    
      state.count ++;      
    },
    changeEmail(state, payload) {  
      console.log(payload)  
      state.email = payload.email;      
    },
    changeLoginyn(state) {    
      state.loginYn = true;      
    },    
  },
  actions:{
    login(context, payload){
      context.commit('changeEmail',payload);
      context.commit('changeLoginyn');
    }
  } 
}) 
export default store; 