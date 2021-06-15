<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :product="item" :key="item.id"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: "GoodsList",
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style scoped>

.goods {
    display: flex;    /* 弹性盒 */
    flex-wrap: wrap;  /* 自动换行 */
    justify-content: space-around;  /* 四周环绕 */
    padding: 10px;
}

</style>
