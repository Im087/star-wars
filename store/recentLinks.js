const getDefaultState = () => {
  return {
    _recentLinks: []
  };
};

export const state = getDefaultState;

export const getters = {
  getRecentLinks(state) {
    return state._recentLinks;
  }
};

export const actions = {
  setRecentLinks({commit}, obj) {
    commit('SET_RECENT_LINKS', obj);
  }
};

export const mutations = {
  SET_RECENT_LINKS(state, obj) {
    if(state._recentLinks.length) {
      if(state._recentLinks.every(el => el.path != obj.path)) {
        if(state._recentLinks.length >= 3) {
          state._recentLinks.shift();
        }
        state._recentLinks.push(obj);
      }
    } else {
      state._recentLinks.push(obj);
    }
  }
};