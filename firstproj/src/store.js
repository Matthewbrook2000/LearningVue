import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    count: 0, //actual store
    currentPage: 'main'
  },
  mutations: {
      incrementCount: state => state.count++,  //updates 1 state (changes data)
      decrementCount: state => state.count--,
      changeCurrentPage(state, data) {
        state.currentPage = data;
      }
  },
  getter: {
                        //just a getter
  },
  actions: {
                        //for data manipulation
                        //axios request
                        //axios is for interacting with php
  }
})