<template>
  <!-- 官网引入，按需修改 -->
  <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545C64" text-color="#fff"
    active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>{{ isCollapse ? '后台' : 'myvue系统' }}</h3>
    <!-- 拿到数据之后进行渲染   没有孩子的进行渲染-->
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class='"el-icon-" + item.icon'></i>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <!-- 有孩子的进行渲染 -->
    <el-submenu :index="item.path + ''" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class='"el-icon-" + item.icon'></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <el-menu-item-group v-for="item in item.childern" :key="item.path" :inedx="item.path + ''">
        <el-menu-item @click="clickMenu(item)">{{ item.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      // isCollapse: false
      // menu都是新加进去的
      menu: [
        // {
        //   path: '/homeview',
        //   name: 'homeview',
        //   label: '首页',
        //   icon: 's-home',
        //   url: 'HomeView/homeview'
        // },
        // {
        //   path: '/mall',
        //   name: 'mall',
        //   label: '商品管理',
        //   icon: 's-grid',
        //   url: 'MallManage/MallManage'
        // },
        // {
        //   path: '/user',
        //   name: 'user',
        //   label: '用户管理',
        //   icon: 'user-solid',
        //   url: 'UserManage/UserManage'
        // },
        // {
        //   label: '其他',
        //   icon: 'location',
        //   childern: [
        //     {
        //       path: '/page1',
        //       name: 'page1',
        //       label: '页面1',
        //       icon: 'icon-location',
        //       url: 'Other/PageOne'
        //     },
        //     {
        //       path: '/page2',
        //       name: 'page2',
        //       label: '页面2',
        //       icon: 'icon-location',
        //       url: 'Other/PageTwo'
        //     }
        //   ]
        // }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // home() {
    //   this.$router.push({ name: "first_page", });
    // },
    clickMenu(item) {
        this.$router.push({
        name: item.name
      })
      // .catch(
      //   err =>{
      //     console.log('输出错误',err);
      //   }
      // )
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    noChildren() {
      return this.asyncMenu.filter(item => !item.childern)
    },
    hasChildren() {
      return this.asyncMenu.filter(item => item.childern)
    },
    asyncMenu() {
      return this.$store.state.tab.menu

    }

  }
}
</script>
<style scoped>
.el-menu {
  height: 100%;
  border: none;
}

h3 {
  text-align: center;
  color: azure
}
</style>
