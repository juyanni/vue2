
import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/homeview',
                name: 'homeview',
                label: '首页',
                icon: 's-home',
                // url: 'HomeView/homeview'
            }],
        // 当前选中
        currentMenu: null,
        menu:[]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse

        },
        selectMenu(state, val) {
            if (val.name !== 'homeview') {
                state.currentMenu = val
                // 选中的内容和菜单栏对应
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearToken(state) {
            state.Cookie = []
            Cookie.remove('menu')
        },
        addToken(state,router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item =>{
                        item.component = ()=>import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else {
                    item.component =() =>import(`../views/${item.url}`)
                }
            });
            menuArray.forEach(item => {
                router.addRoute('a',item)
            })
        }
    }
}