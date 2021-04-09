<template>
  <div class="hello">
    <h1>{{ $store.getters.fullname }}</h1>
    <h1>{{ $store.getters.fullname2 }}</h1>
    <h1>{{ $store.getters.fullname3 }}</h1>
    <button @click="aUPdateName">Action更改Name</button>
    <h1>{{ $store.state.a.name }}</h1>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">更新Info</button>
    <h1>{{ $store.state.counter }}</h1>
    <h1>{{ $store.getters.powerCounter }}</h1>
    <h1>{{ more20Age }}</h1>
    <h2>{{ $store.getters.more20AgeLength }}</h2>
    <button @click="plus">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank"> vue-router </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank"> vuex </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank"> vue-loader </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  UPDATEINFO,
} from "@/store/mutation-type";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    plus() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit(DECREMENT);
    },
    addCount(num) {
      // this.$store.commit(INCREMENTCOUNT, num);
      this.$store.commit({ type: INCREMENTCOUNT, num });
    },
    addStudent() {
      this.$store.commit(ADDSTUDENT, { id: 3, age: 88, name: "adafsd" });
    },
    updateInfo() {
      // this.$store.commit(UPDATEINFO);
      this.$store.dispatch("aUpdateInfo", "里面已经完成了").then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName");
    },
    aUPdateName() {
      this.$store.dispatch("aUpdateName");
    },
  },
  computed: {
    more20Age() {
      return this.$store.state.students.filter((x) => x.age > 20);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
