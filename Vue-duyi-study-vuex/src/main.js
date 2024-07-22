import '@/styles/reset.css';
import '@/styles/global.less';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const resp = await store.dispatch('loginUser/whoAmI')


const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
