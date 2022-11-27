// holds your root state
export const state = () => ({
  post: []
})

// contains your actions
export const actions = {
  async actionPost({ commit }) {
    const result = await this.$axios.$post('http://localhost:8000/api/post-all')
    commit('SET_POST', result)
  }

}
// contains your mutations
export const mutations = {
  SET_POST(state, payload) {
    state.post = payload
  }
}
// your root getters
export const getters = {
}
