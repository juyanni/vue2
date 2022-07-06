<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <!-- 3.使用  把second.vue里面东西引入--是一个页面 -->
      <second ></second>
    </el-aside>
    <el-container>
      <el-header>
        <headerage></headerage>
      </el-header>
      <el-main>
        <!-- <home-view></home-view> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 1.引入  import Second from '../components/Second.vue' 
import Second from '../components/Second.vue'
import Headerage from '../components/Headerage.vue'
// import HomeView from '@/views//HomeView.vue'
export default {
  // name:'a',
  // 2.注册  components:{ Second }
  components: {
    Second,
    Headerage,
    // HomeView
  }
}
</script>
<style scoped>
.el-header {
  background-color: black;
}
</style>
