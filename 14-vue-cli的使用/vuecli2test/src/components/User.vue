<template>
  <div>
    <h2>我是用户组件</h2>
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
<style scoped>
</style>
