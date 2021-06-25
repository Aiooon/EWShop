import { Notify } from 'vant';
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
const Home = () => import('../views/home/Home');
const Login = () => import ('../views/profile/Login');
const Detail = () => import('../views/detail/Detail');
const Profile = () => import('../views/profile/Profile');
const ShopCart = () => import('../views/shopcart/ShopCart');
const Register = () => import('../views/profile/Register');
const Category = () => import('../views/category/Category');
const Address = () => import('../views/profile/Address');
const AddressEdit = () => import('../views/profile/AddressEdit');
const Order = () => import('../views/order/Order');
const CreateOrder = () => import('../views/order/CreateOrder');
const OrderDetail = () => import('../views/order/OrderDetail');
const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书商城-首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书商城-首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '图书商城-分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '图书商城-商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '图书商城-购物车',
      isAuthRequired: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '图书商城-个人中心',
      isAuthRequired: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title: '地址管理',
      isAuthRequired: true
    }
  },
  {
    path: '/addressedit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta: {
      title: '地址编辑',
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title:'生成订单',
      isAuthRequired:true
    }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta: {
      title: '创建订单',
      isAuthRequired: true
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title:'订单详情',
      isAuthRequired:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局导航守卫，页面跳转时更新网页 title
router.beforeEach((to, from, next) => {
  // todo 如果没有登录，在这里login
  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    Notify('您还未登录，请先登录');
    return next('/login');
  } else {
    next();
  }
  document.title = to.meta.title;
})

export default router
