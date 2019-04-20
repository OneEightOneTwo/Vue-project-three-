import Vue from 'vue'
import VueRouter from 'vue-router'
//模块化必须使用Vue.use来加载路由功能
Vue.use(VueRouter)

//引入Home组件
import Home from './pages/Home.vue'
//Home下的嵌套组件
import One from './pages/Home/One.vue'
import Two from './pages/Home/Two.vue'
import Three from './pages/Home/Three.vue'
import Four from './pages/Home/Four.vue'
//朋友圈页
import Friends from './pages/Xfriends.vue'
//匿名告白页
import Cryp from './pages/Cryp.vue'
//激活特权页面
import Privilege from './pages/Privilege.vue'
//个人信息页面
import Personal from './pages/Personal.vue'
//个人信息编辑页面
import Bpersonal from './pages/Bpersonal.vue'
//登录页面
import Login from './pages/Login.vue'
//one详情页
import msgDetails from './pages/msgDetails.vue'

//定义路由
const routes = [
    {
        path: '/home', component: Home, name: 'home',
        //嵌套路由
        children: [  
            { path: 'one', component: One, name: 'one' },
            { path: 'two', component: Two, name: 'two' },
            { path: 'three', component: Three, name: 'three' },
            { path: 'four', component: Four, name: 'four' }
        ]
    },
    { path: '/friends', component: Friends, name: 'friends' },
    { path: '/Cryp', component: Cryp, name: 'Cryp' },
    { path: '/privilege', component: Privilege, name: 'privilege' },
    { path: '/bpersonal', component: Bpersonal, name: 'bpersonal' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/personal', component: Personal, name: 'personal' },
    { path: '/msgdetails', component: msgDetails, name: 'msgdetails' },
    { path: '/', redirect: '/home/one' }
]
//实例化路由
const router = new VueRouter({
    routes
});


//暴露路由，为后续挂载做准备
export default router