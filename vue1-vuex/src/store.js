import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {id:1,name:"a"}
    ],

    name: "aa"

  },
  getters: {
    //获取todoList的长度
    todoListNum (state) {
        return state.todoList.length
   }
  },
  //修改计算属性中的name
  mutations: {
    CHG_NAME (state,payload) {
        state.name = payload.name
    },

    ADD_TODO(state,payload){
      state.todoList.push(payload)
    },
    DEL_TODO(state,payload) {
      state.todoList.splice(payload.index,1)
    }
  },
  actions: {
     ADD_TODO_ACT({state,getters,commit,dispatch},payload){

      setTimeout(()=>{
        commit({
          type:'ADD_TODO',
          payload
        })
      },2000)

     }
  }
})
