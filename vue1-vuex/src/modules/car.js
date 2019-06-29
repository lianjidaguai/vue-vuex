export default {
  namespaced:true,
    state:{
        productList: [
            {id:1,name:'apple',price:18},
            {id:2,name:'banana',price:10},
            {id:3,name:'orange',price:5},
          ],
          carList: [], 
    },
    getters: {
        //获取todoList的长度
      //   todoListNum (state) {
      //     return state.todoList.length
      //  },
       carTotal(state) {
         let total = 0;
         if(state.carList.length) {
           total = state.carList.reduce((total,item)=> {
             return total+item.total;
           },0)
         }
         return total;
       }
    
      },
      mutations:{
        CHG_CARLIST(state,payload) {
            let product = payload.product
            if(payload.name === 'add') {
            //判断是否是同样的商品在购物车中
            let index = state.carList.findIndex(item=> item.id === product.id);
            if(index>-1){
             state.carList[index].num++;
             state.carList[index].total+=product.price; 
            } else{
                state.carList.push({
                ...product,
                num:1,
                total:product.price*1
              })
            }
          }else if (payload.name === 'reduce'){
            
            let index = state.carList.findIndex(item=> item.id === product.id);
      
            if(index > -1) {
              if(state.carList[index].num>1){
                state.carList[index].num--
      
                state.carList[index].total-= product.price;
              } else {
                state.carList.spalice(index, 1)
              }
              
              
            }
           }
          }
      }
}