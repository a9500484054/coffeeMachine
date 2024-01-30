import { createStore } from 'vuex'

interface stateType {
  coffeeList: any[]; 
}

export default createStore({

  state: (): stateType => ({
    coffeeList: [],
  }),
  mutations: {
    updateData(state, newData: any) {
      state.coffeeList.push(newData);
    },
    UPDATE_COFFEE_COUNT(state, { index, count }) {
      state.coffeeList[index].count = count;
    },
  },
  actions: {
    addToMyDataAction({ commit, state }, newData: any) {
      console.log(newData);
      commit('updateData', newData);
    },
    updateCoffeeCount({ commit }, { index, count }) {
      commit('UPDATE_COFFEE_COUNT', { index, count });
    },
  },
  getters: {
    getCoffeeList: (state) => state.coffeeList,
  },
  modules: {},
  
});