<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return { path: "/home/news" };
  },
  activated() {
    if (this.$route.path != this.path) this.$router.push(this.path);
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    console.log("离开前");
    next();
  },
};
</script>
<style scoped>
</style>
