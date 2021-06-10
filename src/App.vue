<template>
  <router-view/>
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div><i class="iconfont icon-shouye"></i></div>
      <div>首页</div>
    </router-link>

    <router-link class="tab-bar-item" to="/category">
      <div><i class="iconfont icon-fenlei"></i></div>
      <div>分类</div>
    </router-link>

    <router-link class="tab-bar-item" to="/shopcart">
      <div><i class="iconfont icon-gouwuchezhengpin"></i></div>
      <div>购物车</div>
    </router-link>

    <router-link class="tab-bar-item" to="/profile">
      <div><i class="iconfont icon-yonghu"></i></div>
      <div>我的</div>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
