<template>
    <div class="backTop" @click="backtop">
    </div>
</template>

<script>
export default {
    name: "BackTop",
    setup(props, {emit}) {
        return {
            backtop:() => {
                emit('bTop');
            }
        }
    }
}
</script>

<style scoped>
.backTop{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 30px;
    z-index: 10;
    box-shadow: 3px 3px 3px #888;
    border-radius: 50%;
    background: #f6f6f6 url('~assets/images/tag/Uparrow.png') no-repeat center center;
}
</style>
