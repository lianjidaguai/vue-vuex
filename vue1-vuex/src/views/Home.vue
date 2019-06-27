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
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name: 'home',

  data () {
    return {
      inputVal: '',
     
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
    ...mapState(['todoList','name']),
    ...mapGetters(['todoListNum'])
  },

  methods: {
    ...mapActions([''])
    ...mapMutations(["DEL_TODO"]),
    /**
     * 添加todo
     */
    addTodo () {
      let lastTodo = this.todoList[this.todoList.length - 1];
      let id = lastTodo ? lastTodo.id + 1 : 1;
      this.$store.dispatch('ADD_TODO_ACT',{
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
</style>
