// holds your root state
export const state = () => ({
  categories: []
})

// contains your actions
export const actions = {
  async actionCategories({ commit }) {
    const result = await this.$axios.$post('http://localhost:8000/api/category-all')
    commit('SET_CATEGORY', result)
  }

}
// contains your mutations
export const mutations = {
  SET_CATEGORY(state, payload) {
    state.categories = payload
  }
}
// your root getters
export const getters = {
}
