<template>
    <div>
        <nav-bar>
            <template v-slot:default>分类</template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    name: 'Category',
    components: {
        NavBar
    }
}
</script>

<style scoped>

</style>
