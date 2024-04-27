import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navbarOpen: false,
      nameChanged: ('Nome'),
    };
  },
  mutations: {
    toggleNavbar(state) {
      state.navbarOpen = !state.navbarOpen;
    },
    modifyName(state, newName) {
      state.nameChanged = newName;
    },
  },
  actions: {
    toggleNavbar({ commit }) {
      commit('toggleNavbar');
    },
    modifyName({ commit }, newName) {
      commit('modifyName', newName);
    },
  },
  getters: {
    isNavbarOpen(state) {
      return state.navbarOpen;
    },
    isNameChanged(state) {
      return state.nameChanged;
    },
  },
});

export default store;