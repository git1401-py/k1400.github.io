import axios from "axios";

const handsfree = {
  namespaced: true,
  state: {
    handsfree: [],
  },
  getters: {
    allProducts(state) {
      return state.handsfree;
    },
  },
  mutations: {
    sethandsfree(state, handsfree) {
      state.handsfree = handsfree;
    },
  },
  actions: {
    async fetchHandsfree({ commit }) {
      const response = await axios.get("./json/handsfree.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("sethandsfree", response.data);
    },
  },
};
export default handsfree;
