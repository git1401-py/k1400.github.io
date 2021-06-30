import axios from "axios";

const recentselse = {
  namespaced: true,
  state: {
    recentselse: [],
  },
  getters: {
    allProducts(state) {
      return state.recentselse;
    },
  },
  mutations: {
    setrecentselse(state, recentselse) {
      state.recentselse = recentselse;
    },
  },
  actions: {
    async fetchRecentselse({ commit }) {
      const response = await axios.get("./json/recentseles.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setrecentselse", response.data);
    },
  },
};
export default recentselse;
