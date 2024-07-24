
import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import News from '@/views/News.vue'
import User from '@/views/User.vue'
import Loading from '@/views/Loading.vue'

export default [
    { path: "/", name: 'Home', component: Home },
    { path: "/loading", name: 'Loading', component: Loading },
    { path: "/login", name: 'login', component: Login },
    {
        path: "/news", name: 'news', component: News,
        meta: {
            auth: true,
        }
    },
    {
        path: "/user", name: 'user', component: User,
        meta: {
            auth: true,
        }
    },
]