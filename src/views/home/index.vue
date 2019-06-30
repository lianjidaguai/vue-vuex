<template>
    <div class="page-home">
        <router-view></router-view>
      <Tabbar 
      :tabs="[
      {name:'电影' ,icon:'icondianying',to:'/films'},
      {name:'影院' ,icon:'iconyingyuanA',to:'/cinemas'},
      {name:'我的' ,icon:'iconwode', to:'/center'}

      ]"
       />
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar/index.vue"
export default {
    name:"home",
    components: {
        Tabbar
    }
};
</script>
<style lang="scss">
.page-home{
 display:flex;
 flex-direction:column;
 height:100%;
  
  > div:first-child {
      flex:1;
      overflow-y: auto;
  }

}

</style>