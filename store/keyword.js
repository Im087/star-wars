const getDefaultState = () => {
  return {
    _keyword: ''
  };
};

export const state = getDefaultState;

export const getters = {
  getKeyword(state) {
    return state._keyword;
  }
};

export const actions = {
  setKeyword({commit}, str) {
    commit('SET_KEYWORD', str);
  }
};

export const mutations = {
  SET_KEYWORD(state, str) {
    state._keyword = str;
  }
};