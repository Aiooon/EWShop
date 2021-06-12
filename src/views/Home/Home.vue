<template>
    <div>
        <nav-bar>
            <template v-slot:default>图书商城</template>
        </nav-bar>
        <div class="banner">
            <img src="~assets/images/1.png" alt="">
        </div>
        <!-- 向子组件传数据 -->
        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './ChildComps/RecommendView'
import { getHomeAllData } from 'network/home'
import { ref, reactive, onMounted } from 'vue'

export default {
    name: 'Home',

    setup () {
        const recommends = ref([]);

        onMounted( ()=>{
            // console.log(recommends);
            getHomeAllData().then(res=>{
                console.log(res);
                recommends.value = res.goods.data;
            })
        })

        return {
            recommends
        }
    },

    components: {
        NavBar,
        RecommendView,
    }
}
</script>

        RecommendView
<style scoped>
.banner img{
    width: 100%;
    height: auto;
    margin-top: 45px;
}

</style>
