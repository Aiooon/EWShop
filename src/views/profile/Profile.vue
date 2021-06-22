<template>
    <div>
        <nav-bar>
            <template v-slot:default>个人中心</template>
        </nav-bar>


        <div style="margin: 15px; margin-top: 100px; padding: 16px;">
            <van-button @click="toLogout" round block color="#45bc7f">退出登录</van-button>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import { logout } from 'network/user';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';

export default {
    name: 'Profile',
    setup() {
        const router = useRouter();
        const toLogout = ()=> {
            logout().then(res => {
                Toast.success('退出成功');
                window.localStorage.setItem('token', '');

                setTimeout(() => {
                    router.push({path:'/login'});
                }, 100);
            })
        }
        return {
            toLogout,
        }
    },
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>
