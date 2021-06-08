<template>
  <div class="home">
    <div class="demo">this is a test</div>
    <!-- 在模板中访问别名时需要加 ~，如 ~assets -->
    <img src="~assets/images/2.png">
    <img :src="imgsrc">
    <img alt="Vue logo" src="~assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src  @ 是webpack提供的别名，代表/src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      imgsrc: require('assets/images/2.png')  // 使用别名 assets
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.demo {
  /* 在 style 中访问别名时也需要加 ~ */
  background: url('~assets/images/2.png') no-repeat;
  width: 400px;
  height: 400px;
  color: var(--color-high-text);
}
</style>
