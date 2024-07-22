import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  //每当导航切换时(包含刷新页面的第一次)，该函数会运行
  //from:之前的路由对象 (this.Sroute)// to:即将进入的路由对象(this.Sroute)
  // next:确认导航的一个函数 调用该函数(无参)，就会直接进入to就会直接进入to,
  // 调用该函数(传入参数)根据传入参数进入新的导航

  console.log(to)
  console.log(from)
  console.log(next)
})

export default router
