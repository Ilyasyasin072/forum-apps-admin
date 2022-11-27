// holds your root state
export const state = () => ({
  userLogin: []
})

// contains your actions
export const actions = {
  async actionLoginUser({ commit }) {
    const token = null;
    localStorage.setItem('token-admin', token);
    commit('SET_TOKEN', token)
  }

}
// contains your mutations
export const mutations = {
  SET_TOKEN(state, payload) {
    state.userLogin = payload
  }
}
// your root getters
export const getters = {
}
