
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import News from '@/views/News.vue'
import User from '@/views/User.vue'

export default [
    { path: "/", name: 'Home', component: Home },
    { path: "/login", name: 'login', component: Login },
    { path: "/news", name: 'news', component: News },
    { path: "/user", name: 'user', component: User },
]