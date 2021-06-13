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

        <tab-control @tabClick='tabClick' :titles="['热销', '新书', '精选']"></tab-control>

        <goods-list></goods-list>

    </div>
</template>

<script>
import TabControl from 'components/content/tabControl/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './ChildComps/RecommendView'
import GoodsList from 'components/content/goods/GoodsList'
import { getHomeAllData } from 'network/home'
import { ref, reactive, onMounted } from 'vue'

export default {
    name: 'Home',

    setup () {

        let tabid = ref(0);
        const recommends = ref([]);

        onMounted( ()=>{
            // console.log(recommends);
            getHomeAllData().then(res=>{
                // console.log(res);
                recommends.value = res.goods.data;
            })
        })

        const tabClick = (index)=>{
            tabid.value = index;
        }

        return {
            tabid,
            tabClick,
            recommends
        }
    },

    components: {
        NavBar,
        RecommendView,
        TabControl,
        GoodsList
    }
}
</script>

<style scoped>
.banner img{
    width: 100%;
    height: auto;
    margin-top: 45px;
}

</style>
