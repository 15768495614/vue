<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="~assets/img/tabbar/log.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/log_active.jpg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="~assets/img/tabbar/log.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/log_active.jpg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/log.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/log_active.jpg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/log.jpg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/log_active.jpg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import("components/tabbar/TabBar.vue");
const TabBarItem = () => import("components/tabbar/TabBarItem.vue");
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>>
