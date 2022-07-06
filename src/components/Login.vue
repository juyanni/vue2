<template>
    <!-- 登录页面整个屏幕显示 -->
    <div class="login_backgrond">
        <!-- 登录框的设计 -->
        <div class="login_box">
            <!-- 头像区 -->
            <div class="login_logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 表单样式 -->
            <!-- model只是将父组件的数据传递到了子组件，并无实现子组件和父组件数据的双向绑定 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名框 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <!-- 密码框 type="password使得密码是小圆点 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-goods" type="password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
// import Mock from 'mockjs';
import { getMenu } from '../api/data'
export default {
    name:'login',
    // data里面的数据出现在别处要用this来引用一下
    data() {
        return {
            // 这是登录表单的数据绑定对象
            loginForm: {
                username: '',
                password: ''
            },
             //  表单验证规则对象
             loginFormRules:{
                //  验证用户名是否合法
                 username:[ { required: true, message: '请输入用户名', trigger: 'blur' },
                  { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                 ],
                 //  验证密码是否合法
                 password:[
                     { required: true, message: '请输入用户登录密码', trigger: 'blur' },
                  { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                 ]
             }
        }
    },
    // 出现按钮添加点击事件都会用到此方法，注意拿data中数据时要加this
    methods:{
        // name:'login',
         login(){ 
            getMenu(this.loginForm).then(({data:res}) =>{
                console.log(res,'res');
                if (res.code === 20000) {
                     this.$store.commit('clearToken')
                      this.$store.commit('setMenu',res.data.menu)
                       this.$store.commit('setToken',res.data.token)
                      this.$store.commit('addToken',res.$router)
                      this.$router.push({name:"homeview"})
                }else{
                    this.$message.console.warning(res.data.message);
                }
            })
            // mock来模拟后端随机生成

            // const token = Mock.random.guid()
            // this.$store.commit('setToken',token)
            // this.$router.push({name:"homeview"});
            // if (this.loginForm.username==1234 && this.loginForm.password==123456) {
            //     this.$router.push({name:"homeview"});
            // }else{
            //     alert("用户名或密码输入错误！！！！！！");
            // }
            
    },
     resetLoginForm(){
               this.$refs.loginFormRef.resetFields(); 
            }
}
}
</script>
<style scoped>
.login_backgrond {
    background-color: #5975ca;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    /*绝对定位可以修改box位置 */
    position: absolute;
    /* 下面三行代码是控制盒子居中的 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.login_logo {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    /* 内边距 */
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    /* 第一个参数是横向，第二个参数是纵向 */
    transform: translate(-50%, -50%);
    background-color: #fff;

}

img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
.btns {
    display: flex;
    justify-content: flex-end;
}
</style>