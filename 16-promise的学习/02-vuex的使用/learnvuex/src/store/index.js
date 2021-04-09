import Vue from 'vue'
import Vuex from 'vuex'

import {
    INCREMENT,
    DECREMENT,
    INCREMENTCOUNT,
    ADDSTUDENT,
    UPDATEINFO,
} from './mutation-type'

Vue.use(Vuex)

const moduleA = {
    state: {
        name: '张三'
    },
    mutations: {
        updateName(state) {
            state.name = '李四';
        }
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                context.commit('updateName');
            }, 100);
        }
    },
    getters: {
        fullname(state) {
            return 'asdfasdf';
        },
        fullname2(state, getter) {
            return getter.fullname + '1221';
        },
        fullname3(state, getter, rootState) {
            return getter.fullname2 + rootState.counter;
        }
    },
    modules: {}
}

const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 1, age: 20, name: '张三' },
            { id: 1, age: 30, name: '李四' },
        ], info: {
            name: 'lcl'
        }
    },
    mutations: {
        [INCREMENT](state) {
            state.counter++;
        },
        [DECREMENT](state) {
            state.counter--;
        },
        [INCREMENTCOUNT](state, payload) {
            // console.log(num);//payload
            // state.counter += num;
            state.counter += payload.num;
        },
        [ADDSTUDENT](state, student) {
            state.students.push(student);
        },
        [UPDATEINFO](state) {
            state.info.name = '张三';
            // state.info.age = 12;
            // Vue.set(state.info, 'age', 12);
            // Vue.delete(state.info, 'name');
        }
    },
    actions: {
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit(UPDATEINFO);
                    console.log(payload);
                    resolve('1111');
                }, 1000);
            });
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter;
        },
        more20Age(state) {
            return state.students.filter((x) => x.age > 20);
        },
        more20AgeLength(state, getters) {
            return getters.more20Age.length;
        }
    },
    modules: {
        a: moduleA
    }
})


export default store
