import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo';
import car from './modules/car';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // inputVal: '',
    // todoList: [
    //   {id:1,name:"a"}
    // ],

    // productList: [
    //   {id:1,name:'apple',price:18},
    //   {id:2,name:'banana',price:10},
    //   {id:3,name:'orange',price:5},
    // ],

    // carList: [],

    

    name: "aa"

  },
  // getters: {
  //   //获取todoList的长度
  // //   todoListNum (state) {
  // //     return state.todoList.length
  // //  },
  //  carTotal(state) {
  //    let total = 0;
  //    if(state.carList.length) {
  //      total = state.carList.reduce((total,item)=> {
  //        return total+item.total;
  //      },0)
  //    }
  //    return total;
  //  }

  // },
  //修改计算属性中的name
  mutations: {
    // CHG_INPUT_VAL(state,payload) {
    //   state.inputVal = payload.value
    // },
     CHG_NAME (state,payload) {
        state.name = payload.name
    },

    // ADD_TODO(state,payload){
    //   state.todoList.push(payload)
    // },
    // DEL_TODO(state,payload) {
    //   state.todoList.splice(payload.index,1)
    // },
    // CHG_CARLIST(state,payload) {
    //   let product = payload.product
    //   if(payload.name === 'add') {
    //   //判断是否是同样的商品在购物车中
    //   let index = state.carList.findIndex(item=> item.id === product.id);
    //   if(index>-1){
    //    state.carList[index].num++;
    //    state.carList[index].total+=product.price; 
    //   } else{
    //       state.carList.push({
    //       ...product,
    //       num:1,
    //       total:product.price*1
    //     })
    //   }
    // }else if (payload.name === 'reduce'){
      
    //   let index = state.carList.findIndex(item=> item.id === product.id);

    //   if(index > -1) {
    //     if(state.carList[index].num>1){
    //       state.carList[index].num--

    //       state.carList[index].total-= product.price;
    //     } else {
    //       state.carList.spalice(index, 1)
    //     }
        
        
    //   }
    //  }
    // }
  },
  actions: {
    //  ADD_TODO_ACT({commit},payload){

    //   setTimeout(()=>{
    //     commit({
    //       type:'ADD_TODO',
    //        ...payload
    //     })
    //   },2000)

    //  }
  },
  modules:{
    todo,
    car
  }
})
