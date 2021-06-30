import axios from "axios";

const watches = {
  namespaced: true,
  state: {
    watches: [],
  },
  getters: {
    allProducts(state) {
      return state.watches;
    },
  },
  mutations: {
    setwatches(state, watches) {
      state.watches = watches;
    },
  },
  actions: {
    async fetchWatches({ commit }) {
      const response = await axios.get("./json/watches.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setwatches", response.data);
    },
  },
};
export default watches;
