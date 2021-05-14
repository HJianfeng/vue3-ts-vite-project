import { createStore } from 'vuex';

const store = createStore({
  state: {
    userInfo: {
      name: 'defalut'
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    asyncGetUserInfo({ commit }) {
      setTimeout(() => {
        commit('setUserInfo', +new Date() + 'action');
      }, 2000);
    }
  },
  getters: {
    userInfoGetter(state) {
      return state.userInfo;
    }
  }
});

export default store;
