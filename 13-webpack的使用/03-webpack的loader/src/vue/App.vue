<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮111</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  name: "App",
  data() {
    return {
      message: "Hello world",
      name: "coderwhy",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮点击了");
    },
  },
  components: {
    Cpn,
  },
};
</script>
<style scoped>
.title {
  color: green;
}
</style>