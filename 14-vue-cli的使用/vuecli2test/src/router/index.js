// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeMessage = () => import('../components/HomeMessage')
const HomeNews = () => import('../components/HomeNews')
const Profile = () => import('../components/Profile')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

const routes = [
    {
        path: '', redirect: '/home'
    },
    {
        path: '/home', component: Home,
        children: [
            { path: '', redirect: 'news' },
            { path: 'news', component: HomeNews },
            { path: 'message', component: HomeMessage },
        ], meta: {
            title: '首页'
        }
    },
    {
        path: '/about', component: About, meta: {
            title: '关于'
        }
    },
    {
        path: '/user/:id', component: User, meta: {
            title: '用户'
        }
    },
    {
        path: '/profile/', component: Profile, meta: {
            title: '档案'
        }
    }
]

//2.创建VueRouter对象
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
});

router.afterEach((to, from) => {
    console.log(to);
    console.log(from);
});

//3.将router对象传入Vue实例中

export default router