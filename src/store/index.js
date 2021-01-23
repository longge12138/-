import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
   shoppingcarts:[]
  },
  mutations: {
    add (state,payload) {
      state.shoppingcarts.push(payload)
    },
    // des(state,payload){
    //     var tempidx=-1;
    //     state.shoppingcarts.forEach((item,index)=>{
    //         if(item.id==payload){
    //             tempidx=index;
    //         }
    //     })
    //     state.shoppingcarts.splice(tempidx,1)
    // }
  }
})
export default store