// holds your root state
export const state = () => ({
  users: []
})

// contains your actions
export const actions = {
  async actionUser({ commit }) {
    const result = await this.$axios.$post('http://localhost:8000/api/get-user')
    commit('SET_USER', result)
  }

}
// contains your mutations
export const mutations = {
  SET_USER(state, payload) {
    state.users = payload
  }
}
// your root getters
export const getters = {
}
