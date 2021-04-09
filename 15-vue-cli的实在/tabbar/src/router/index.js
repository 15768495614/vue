import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../components/home/Home')
const Category = () => import('../components/category/Category')
const Cart = () => import('../components/cart/Cart')
const Profile = () => import('../components/profile/Profile')

const routes = [
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

export default router