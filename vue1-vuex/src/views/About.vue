<template>
  <div class="about">
    <h1>This is an about page - {{name}}</h1>
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
              @click="delTodo(scope.$index)"
              >
              Delete - {{ scope.row.name }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'About',

  computed: {
    ...mapState(['todoList',"name"])
  }
}

</script>
