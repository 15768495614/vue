import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// const a1 = axios.create({ baseURL: 'http://httpbin.org', timeout: 5000 });
// a1({ url: '/image' }).then(res => {
//   console.log(res);
// });
// const a2 = axios.create({ baseURL: 'http://httpbin.org' });
// a2({ url: '/get' }).then(res => {
//   console.log(res);
// })
// axios.all([a1, a2]).then(res => {
//   console.log(res);
// })
// axios.all([a1, a2]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

request({ url: '/get' }).then(res => {
  // console.log(res);
}).catch(res => {
  // console.log(res);
})
