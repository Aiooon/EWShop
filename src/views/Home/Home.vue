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

        <goods-list :goods="showGoods"></goods-list>

    </div>
</template>

<script>
import TabControl from 'components/content/tabControl/TabControl'
import NavBar from 'components/common/navbar/NavBar'
import RecommendView from './ChildComps/RecommendView'
import GoodsList from 'components/content/goods/GoodsList'
import { getHomeAllData, getHomeGoods } from 'network/home'
import { ref, reactive, onMounted, computed } from 'vue'

export default {
    name: 'Home',

    setup () {

        const recommends = ref([]);

        // 声明商品列表数据模型
        const goods = reactive({
            sales:    {page: 0, list:[]},
            new:      {page: 0, list:[]},
            recommend:{page: 0, list:[]},
        });

        let currentType = ref('sales');
        // 使用计算属性获取当前类型显示的商品
        const showGoods = computed(() => {
            return goods[currentType.value].list;
        })


        onMounted( ()=>{
            // console.log(recommends);
            getHomeAllData().then(res=>{
                // console.log(res);
                recommends.value = res.goods.data;
            })

            // 热销
            getHomeGoods('sales').then(res=>{
                // console.log(res);
                goods.sales.list = res.goods.data;
            })

            // 新书
            getHomeGoods('new').then(res=>{
                // console.log(res);
                goods.new.list = res.goods.data;
            })

            // 精选推荐
            getHomeGoods('recommend').then(res=>{
                // console.log(res);
                goods.recommend.list = res.goods.data;
            })
            console.log(goods);
        })

        const tabClick = (index)=>{
            let types=['sales', 'new', 'recommend'];
            currentType.value = types[index];
        }

        return {
            tabClick,
            recommends,
            goods,
            currentType,
            showGoods
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
