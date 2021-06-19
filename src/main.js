import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Vant
import 'vant/lib/index.css'
import {Swipe, SwipeItem} from 'vant'
createApp(App).use(store).use(router)
        .use(Swipe).use(SwipeItem).mount('#app')
