<template>
    <div class="goods">
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
        <goods-list-item></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: "GoodsList",
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
