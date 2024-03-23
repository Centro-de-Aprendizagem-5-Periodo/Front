import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navbarOpen: false,
    };
  },
  mutations: {
    toggleNavbar(state) {
      state.navbarOpen = !state.navbarOpen;
    },
  },
  actions: {
    toggleNavbar({ commit }) {
      commit('toggleNavbar');
    },
  },
  getters: {
    isNavbarOpen(state) {
      return state.navbarOpen;
    },
  },
});

export default store;
