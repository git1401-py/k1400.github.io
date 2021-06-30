import axios from "axios";

const popularproduct = {
  namespaced: true,
  state: {
    popularproduct: [],
  },
  getters: {
    allProducts(state) {
      return state.popularproduct;
    },
  },
  mutations: {
    setpopularproduct(state, popularproduct) {
      state.popularproduct = popularproduct;
    },
  },
  actions: {
    async fetchPopularproduct({ commit }) {
      const response = await axios.get("./json/popularproduct.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setpopularproduct", response.data);
    },
  },
};
export default popularproduct;
