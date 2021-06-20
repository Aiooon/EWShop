import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Vant
import 'vant/lib/index.css'
import { Tab, Tabs, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Card, Image as VanImage,Button,Tag } from 'vant'

createApp(App).use(store).use(router)
        .use(Swipe).use(SwipeItem).use(Lazyload,{loading: require('./assets/images/default.png')}).use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Tab).use(Tabs).use(Card).use(VanImage).use(Button).use(Tag)
        .mount('#app')
