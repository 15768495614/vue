<template>
  <div class="title1">
    <h2>我是cpn</h2>
    <p>我是cpn组件的内容，哈哈哈</p>
    <h2>{{ name }}</h2>
  </div>
</template>
<script>
export default {
  name: "Cpn",
  data() {
    return { name: "Cpn组件的name" };
  },
};
</script>

<style scoped>
.title1 {
  color: orange;
}
</style>
