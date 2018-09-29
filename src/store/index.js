import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

  },
  getters:{
       doneTodos: () => {
         return '111'
       }
    /**
     * vue中的计算属性
     *---------------------------------------------------------------
     *    当成属性返回
     *     doneTodos: state => {
     *       return state.todos.filter(todo => todo.done)
     *     }
     *     调用方法：return this.$store.getters.doneTodosCount;
     *---------------------------------------------------------------
     *      当成方法返回
     *     doneTodos: (state) =>(id) =>{
     *       return
     *     }
     *     调用方法：return this.$store.getters.getTodoById(2);
     *---------------------------------------------------------------
     */

  },
  mutations:{
    //更新store方法

    /**
     * 调用方法：this.$store.commit('addCount', {
     *             num: 10
     *           })
     */
  },
  actions: {},
  modules: {
    app,
    user
  }
});

export default store;
