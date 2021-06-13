<template>
    <div class="goods-item">
        <img src="~assets/images/11.png" alt="">
        <div class="goods-info">
            <p>title</p>
            <span class="price"><small>¥</small>100</span>
            <span class="collect"> 3</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem"
}
</script>

<style scoped lang="scss">
.goods-item {
    width: 45%;
    padding-bottom: 40px;
    // background-color: antiquewhite;
    position: relative;
    img {
        width: 100%;
        border-radius: 15px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 3px;
            margin-bottom: 3px;
        }

        .price {
            color: red;
            margin-right: 23px;
        }

        .collect {
            position: relative;
        }
        .collect::before{
            content: '';
            position: absolute;
            left: -13px;
            width: 14px;
            height: 14px;
            top: -1px;
            background: url('~assets/images/tag/sc.png') 0 0/14px 14px;
    }
    }
}

</style>
