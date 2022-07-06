
import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        if (username === '1234' && password === '123456') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/homeview',
                            name: 'homeview',
                            label: '首页',
                            icon: 's-home',
                            url: 'HomeView.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 's-grid',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user-solid',
                            url: 'user/index'
                        },
                        {
                            label: '其他',
                            icon: 'location',
                            childern: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'icon-location',
                                    url: 'other/pageOne.vue'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'icon-location',
                                    url: 'other/pageTwo.vue'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }

        } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/homeview',
                            name: 'homeview',
                            label: '首页',
                            icon: 's-home',
                            url: 'HomeView.vue'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 's-grid',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user-solid',
                            url: 'user/index'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        }else {
            return {
                code:999,
                data:{
                    message:'密码错误'
                }
            }
        }
    }
}