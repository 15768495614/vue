const { add, mul } = require('./js/utils');
console.log(add(20, 30))
console.log(mul(20, 30))
import { name, age, height } from './js/info';
console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')
require('./css/special.less')
document.writeln('4679')

import Vue from 'vue';
// import { App } from './vue/app'
import App from './vue/App.vue'


new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
});