<template>
    <div>
        <nav-bar>
            <template v-slot:default>{{ detail.title }}</template>
        </nav-bar>
    </div>
    <div style="margin-top: 50px">
        <van-image
            width=100%
            :src="detail.cover_url"
        />
        <van-card style="text-align: left"
            :num="detail.stock"
            :price="detail.price+'.00'"
            :desc="detail.description"
            :title="detail.title"
        >
            <template #tags>
                <van-tag plain type="danger">新书</van-tag>
                <van-tag plain type="danger">推荐</van-tag>
            </template>
            <template #footer>
                <!-- <van-button size="warning" @click="handleAddCart">加入购物车</van-button>
                <van-button size="danger" @click="goToCart">立即购买</van-button> -->
                <van-button size="warning">加入购物车</van-button>
                <van-button size="danger">立即购买</van-button>
            </template>
        </van-card>

        <van-tabs v-model="active">
            <van-tab title="概述">
                <div class="content" v-html="detail.details"></div>
            </van-tab>
            <van-tab title="热评">
                <div v-for="(item, index) in comments" :key="index">
                    <!-- {{ item.title }} -->
                </div>
            </van-tab>
            <van-tab title="相关读书">
                <goods-list :goods="like_goods"></goods-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import GoodsList from "components/content/goods/GoodsList";
import { useRoute } from 'vue-router';
import { ref, reactive, onMounted, toRefs } from 'vue';
import { getDetail } from 'network/detail';
import { addCart } from 'network/cart';
import { Toast } from "vant";
import { useStore } from 'vuex';

export default {
    name: 'Detail',
    
    setup() {
        const route = useRoute();
        const store = useStore();
        let id = ref(0);
        let active = ref(0);
        let book = reactive({
            detail:{},
            like_goods:[],
            comments:[]
        })

        onMounted(()=>{
            id.value = route.query.id;
            getDetail(id.value).then((res)=>{
                console.log(res);
                book.detail = res.goods;
                book.like_goods = res.like_goods;
                book.comments = res.like_goods;
            })
        })
        //添加购物车
        const handleAddCart = ()=>{
            addCart({goods_id:book.detail.id, num:1}).then(res=>{
                if(res.status === 204|| res.status === 201){
                    Toast.success('添加成功')
                    store.dispatch('updateCart')
                }
            })
        }
        return {
            id,
            active,
            ...toRefs(book),
            handleAddCart,
        }
    },

    components: {
        NavBar,
        GoodsList
    }
}
</script>

<style scoped>
.content >>> .img {
    max-width: 100%;
    height: auto;
}
</style>
