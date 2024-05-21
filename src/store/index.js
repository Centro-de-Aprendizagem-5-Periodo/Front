import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navbarOpen: false,
      nameChanged: '',
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
      profilePicChanged: 'https://t3.ftcdn.net/jpg/07/21/89/28/240_F_721892884_VkaE9y8m4x5fURbD9GZQ0PY8oJ7ehxOm.jpg',
    };
  },
  mutations: {
    toggleNavbar(state) {
      state.navbarOpen = !state.navbarOpen;
    },
    modifyUser(state, payload) {
      state.nameChanged = payload.name;
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
    isUserChanged(state) {
      return (
        state.nameChanged ||
        state.emailChanged ||
        state.passwordChanged ||
        state.cellphoneChanged ||
        state.birthdayChanged ||
        state.identificationChanged ||
        state.houseNumberChanged ||
        state.complementChanged ||
        state.streetChanged ||
        state.neighborhoodChanged ||
        state.cepChanged ||
        state.cityChanged ||
        state.ufChanged
      );
    },
    isProfilePicChanged(state) {
      return state.profilePicChanged;
    },
  },
});

export default store;