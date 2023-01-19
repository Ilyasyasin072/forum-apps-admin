// holds your root state
export const state = () => ({
  userLogin: null
})
// contains your actions
export const actions = {
  async actionGetUser({commit}) {
   await commit('GET_USER', localStorage.getItem('data-admin'))
  },
  actionLogin({commit}, data) {
    const token = "ad12mnsa";
    localStorage.setItem('token-admin', token);
    localStorage.setItem('data-admin', JSON.stringify(data));
    commit('GET_USER', data);
  },
  async actionLogout({commit}) {
    localStorage.removeItem('token-admin');
    localStorage.removeItem('data-admin');
    await commit('GET_USER', null);
  }

}
// contains your mutations
export const mutations = {
  GET_USER(state, payload) {
    state.userLogin = payload
  }
}
// your root getters
export const getters = {
  getterUserLogin : (state) => state.userLogin
}
