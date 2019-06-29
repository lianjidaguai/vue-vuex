<template>
  <div class="page-home">
    <h1>我是首页 - {{name}}</h1>
    <el-button @click="CHG_NAME({name:'dd',age:18})">修改仓库中的name</el-button>

    <div class="todoList">
      <div class="todoList__top">
        <el-input ref="todoInput" v-model="inputVal" placeholder="请输入..."></el-input>
        <el-button type="primary" :disabled="!inputVal" @click="addTodo">ADD</el-button>
      </div>
      {{todoListNum}}
      <el-table
        :data="todoList"
        >
        <el-table-column label="序号" prop="id" />
        <el-table-column label="事项" prop="name" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              @click="DEL_TODO({index:scope.$index})"
              >
              Delete - {{ scope.row.name }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <hr>

    <div class="carList">
        <div class="left">
          <ul>
            <li v-for="item in productList" :key="item.id">
              <p>商品名称:{{item.name}}</p>
              <p>商品价格: {{item.price}}</p>
              <button @click=" CHG_CARLIST({name:'reduce',product:item})">-</button>
              <button @click=" CHG_CARLIST({name:'add',product:item})">+</button>
            </li>
        
          </ul>
        </div>

        <div class="right">
          <p>最终总价:{{carTotal}}</p>
          <ul>
              <li v-for="item in carList" :key="item.id">
              <p>商品名称: {{item.name}}</p>
              <p>商品单价: {{item.price}}</p>
              <p>购买数量: {{item.num}}</p>
              <p>商品总价: {{item.total}}</p>
             
            </li>
          </ul> 
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
import { CHG_INPUT_VAL } from '../store'
export default {
  name: 'home',

  data () {
    return {
      //inputVal: '',
     
    }
  },
   //第一种方法
  // computed: {
  //   todoList () {
  //     return this.$store.state.todoList
  //   }
  // },
  //第二种方法
  //computed:mapState(['todoList']),
  //第三中方法
  computed:{
    ...mapState(["name"]),
    ...mapState("todo",["todoList"]),
    ...mapState("car",["productList","carList"]),
    ...mapGetters("todo",["todoListNum"]),
    ...mapGetters("car",["carTotal"]),
    // ...mapState(['todoList','name',"productList","carList"]),
    // ...mapGetters(['todoListNum',"carTotal"]),
    inputVal: {
      get () {
        return this.$store.state.todo.inputVal
      },
      set(value) {
        this.$store.commit({
          type: "todo/"+CHG_INPUT_VAL,
          value
        })
      }
    } 

  },

  methods: {
   // ...mapMutations([" CHG_CARLIST"]),
    ...mapActions("todo",['ADD_TODO_ACT']),
    ...mapMutations("car",["CHG_CARLIST"]),
    ...mapMutations("todo",["DEL_TODO"]),
    /**
     * 添加todo
     */
    addTodo () {
      let lastTodo = this.todoList[this.todoList.length - 1];
      let id = lastTodo ? lastTodo.id + 1 : 1;
      
      // this.$store.dispatch('ADD_TODO_ACT',{
      //   id,
      //   name:this.inputVal
      // })
      this.ADD_TODO_ACT({
        id,
        name:this.inputVal
      })
       this.inputVal = '';
      // console.log(this.$refs.todoInput);
      this.$refs.todoInput.focus(); 
      
      // this.todoList.push({
      //   id,
      //   name: this.inputVal
      // })
      // setTimeout(()=>{

      //   this.$store.commit({
      //   type: 'ADD_TODO',
      //   id,
      //   name: this.inputVal
      // })
      //     this.inputVal = '';
      // // console.log(this.$refs.todoInput);
      // this.$refs.todoInput.focus();  
      // },2000)
   
    
    },

    /**
     * 删除todo
     * @param {Number} index 下标
     */
    // delTodo (index) {
    //   //this.todoList.splice(index, 1);
    //   this.$store.commit({
    //     type: 'DEL_TODO',
    //     index
    //   })
    // },
   
    ...mapMutations(['CHG_NAME'])
    // chgName() {
    //   // this.$store.commit('CHG_NAME',{
    //   //   name:'cc',
    //   //   age:18
    //   // }) 
    //   this.$store.commit({
    //     type:"CHG_NAME",
    //     name:'cc',
    //     age:18
    //   })
    // }
  },
  // //如何从store取值
  // mounted () {
  //   console.log(this.$store)
  // }
}
</script>


<style lang="scss">
.todoList {
  width: 500px;
  margin: 0 auto;

  &__top {
    display: flex;

    .el-input {
      margin-right: 10px;
    }
  }
}
.carList {
  display: flex;
  width:700px;
  margin:0 auto;

  >div {
    flex:1;
  }
 .left{
   border-right:1px solid #000;
 }
}
</style>
