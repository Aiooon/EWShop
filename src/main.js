import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Vant
import 'vant/lib/index.css'
import { Icon, Tab, Tabs, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Card, Image as VanImage,Button,Tag, Form, Field, Checkbox, CheckboxGroup, SubmitBar, SwipeCell, Stepper, AddressEdit, AddressList, Popup,Grid, GridItem } from 'vant'

createApp(App).use(store).use(router)
        .use(Swipe).use(SwipeItem).use(Lazyload,{loading: require('./assets/images/default.png')}).use(Badge).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem).use(Tab).use(Tabs).use(Card).use(VanImage).use(Button).use(Tag).use(Form).use(Field).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(Stepper).use(SwipeCell).use(Icon).use(AddressEdit).use(AddressList).use(Popup).use(Grid).use(GridItem)
        .mount('#app')
