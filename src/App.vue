<template>
  <router-view/>
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon"><i class="iconfont icon-shouye"></i></div>
      <div>首页</div>
    </router-link>

    <router-link class="tab-bar-item" to="/category">
      <div class="icon"><i class="iconfont icon-fenlei"></i></div>
      <div>分类</div>
    </router-link>

    <router-link class="tab-bar-item" to="/shopcart">
      <div class="icon"><i class="iconfont icon-gouwuchezhengpin"></i></div>
      <div>购物车</div>
    </router-link>

    <router-link class="tab-bar-item" to="/profile">
      <div class="icon"><i class="iconfont icon-yonghu"></i></div>
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
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0%;
  right: 0%;
  bottom: 0%;
  box-shadow: 0 -3px 1px rgba($color: #000000, $alpha: 0.1);

  a {
    // font-weight: bold;
    color: var(--color-text);

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);
  }
  .tab-bar-item .icon {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    display: inline-block;  // 将块级元素转为行级块
  }
}
</style>
