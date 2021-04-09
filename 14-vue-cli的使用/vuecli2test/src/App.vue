<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- <router-link to="/profile/">档案</router-link> -->
    <router-link
      :to="{ path: '/profile', query: { name: '张三', age: 23, height: 1.88 } }"
      >档案</router-link
    >
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <br />
    下方是路由内容
    <hr />
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { userId: "lisi", imgURL: "https://www.baidu.com/logo.png" };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("moutend");
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: { name: "kobe", age: 19, height: 1.87 },
      });
    },
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
