<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommends.slice(0, 4)" :key="item.id">
            <a href="" @click.prevent="goDetail(item.id)">
                <img v-lazy="item.cover_url" alt="">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    name: "ReocommendView",
    // 接受父组件传来的数据
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    setup() {
        const router = useRouter();

        const goDetail = (id)=>{
            router.push({path:'/detail', query:{id}})
        }

        return {
            goDetail
        }
    }
}
</script>

<style scoped lang="scss">
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 0 20px;
    border-bottom: 6px solid #eee;
    font-size: 12px;
}

.recommend-item{
    flex: 1;
    img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
}
</style>
