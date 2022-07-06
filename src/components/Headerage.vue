<template>
    <header>
        <div class="left">
            <div class="left1">
                <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>

                <!-- <div class="pen">首页</div>  :to="{ path: '/homeview' }"-->
            </div>
            <div class="left2">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
                    </el-breadcrumb-item>
                    <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                </el-breadcrumb>
            </div>
        </div>
        <!-- 下拉框部分 -->
        <div class="right">
            <el-dropdown>
                <span class="el-dropdown-link" size="mini">
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown" class="down" split-button="false">
                    <el-dropdown-item @click.native="mypage">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="down">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>



</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'headerage',
    methods: {
        down() {
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')

            this.$router.push({ name: "login" });
            //    防止刷新才可以出现页面
            location.reload();
        },
        mypage() {
            this.$router.push({ name: "mypage" });
        },
        handleMenu() {
            this.$store.commit('collapseMenu')
        },

    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    data() {
        return {
            userImg: require('../assets/1.jpeg')
        }
    },

}
</script>
<style>
.user {
    height: 40px;
    width: 40px;
    position: absolute;
    left: -25px;
    top: -80px;
    border-radius: 30px;
}

.left {
    position: absolute;
    top: 15px;
    width: 500px;
}

.left1 {
    background-color: aqua;

}

.left2 {
    /* background-color: blueviolet; */
    position: absolute;
    top: 9px;
    left: 50px;
    color: blueviolet;

}


/* .left el-breadcrumb{
    background-color: azure;
    /* position: absolute;
    top: 22px;
    left: 200px; 
    
}  */

.el-button {
    float: left;

}

.pen {
    width: 40px;
    float: left;
    position: absolute;
    left: 55px;
    top: 3px;
    color: #fff;
}

.el-dropdown {
    float: right;
    /* position: absolute; */
    top: 50px;
}

.el-dropdown-link {
    color: #fff;
    cursor: pointer;
    top: 40px;
    position: absolute;

}

.el-icon-arrow-down {
    font-size: 10px;
}
</style>