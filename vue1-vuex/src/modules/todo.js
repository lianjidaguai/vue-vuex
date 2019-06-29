//拆分出来的todo相关的数据
import Vue from 'vue';
import Vuex from 'vuex';
import {CHG_INPUT_VAL} from '../store';

export default {
  namespaced:true,
    //配置命名空间  namespaced:true

    state: {
        inputVal: '',
        todoList: [
          {id:1,name:"a"}
        ],
    },
    getters: {
        //获取todoList的长度
        todoListNum (state) {
          return state.todoList.length
       }
    },
    mutations:{
        [CHG_INPUT_VAL](state,payload) {
            state.inputVal = payload.value
        },
        ADD_TODO(state,payload){
            state.todoList.push(payload)
          },
          DEL_TODO(state,payload) {
            state.todoList.splice(payload.index,1)
          },
    },
   actions:{
    ADD_TODO_ACT({commit},payload){

        setTimeout(()=>{
          commit({
            type:'ADD_TODO',
             ...payload
          })
        },2000)
  
       }
   } 
}