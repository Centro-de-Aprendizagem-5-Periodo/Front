import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navbarOpen: false,
      nameChanged: 'Nome',
      emailChanged: '',
      passwordChanged: '',
      cellphoneChanged: '',
      birthdayChanged: '',
      identificationChanged: '',
      streetChanged: '',
      neighborhoodChanged: '',
      cepChanged: '',
      cityChanged: '',
      ufChanged: '',
    };
  },
  mutations: {
    toggleNavbar(state) {
      state.navbarOpen = !state.navbarOpen;
    },
    modifyName(state, newName) {
      state.nameChanged = newName;
    },
    modifyUser(state, payload) {
      state.emailChanged = payload.email;
      state.passwordChanged = payload.password;
      state.cellphoneChanged = payload.cellphone;
      state.birthdayChanged = payload.birthday;
      state.identificationChanged = payload.identification;
      state.streetChanged = payload.street;
      state.neighborhoodChanged = payload.neighborhood;
      state.cepChanged = payload.cep;
      state.cityChanged = payload.city;
      state.ufChanged = payload.uf;
    }
  },
  actions: {
    toggleNavbar({ commit }) {
      commit('toggleNavbar');
    },
    modifyName({ commit }, newName) {
      commit('modifyName', newName);
    },
    modifyUser({ commit }, payload) {
      commit('modifyUser', payload);
    }
  },
  getters: {
    isNavbarOpen(state) {
      return state.navbarOpen;
    },
    isNameChanged(state) {
      return state.nameChanged;
    }
  },
});

export default store;