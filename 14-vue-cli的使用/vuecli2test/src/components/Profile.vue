<template>
  <div>
    <ul>
      <li>我是Profile</li>
      <li>{{ $route.query.name }}</li>
      <li>{{ $route.query.age }}</li>
      <li>{{ $route.query.height }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Profile",
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
