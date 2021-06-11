<template>
    <div>
        <nav-bar>
            <template v-slot:default>图书商城</template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
    name: 'Home',
    components: {
        NavBar 
    }
}
</script>

<style scoped>

</style>
