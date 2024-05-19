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
      houseNumberChanged: '',
      complementChanged: '',
      streetChanged: '',
      neighborhoodChanged: '',
      cepChanged: '',
      cityChanged: '',
      ufChanged: '',
      profilePicChanged: 'https://st3.depositphotos.com/1594920/18263/i/450/depositphotos_182639510-stock-photo-sphynx-hairless-cat-4-years.jpg',
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
      state.houseNumberChanged = payload.houseNumber;
      state.complementChanged = payload.complement;
      state.streetChanged = payload.street;
      state.neighborhoodChanged = payload.neighborhood;
      state.cepChanged = payload.cep;
      state.cityChanged = payload.city;
      state.ufChanged = payload.uf;
    },
    modifyProfilePic(state, newProfilePic) {
      state.profilePicChanged = newProfilePic;
    },
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
    },
    modifyProfilePic({ commit }, newProfilePic) {
      commit('modifyProfilePic', newProfilePic);
    }
  },
  getters: {
    isNavbarOpen(state) {
      return state.navbarOpen;
    },
    isNameChanged(state) {
      return state.nameChanged;
    },
    isProfilePicChanged(state) {
      return state.state.profilePicChanged;
    },
  },
});

export default store;