import axios from "axios";

const Yogurts = {
  namespaced: true,
  state: {
    Yogurts: [],
  },
  getters: {
    allProducts(state) {
      return state.Yogurts;
    },
  },
  mutations: {
    setYogurts(state, Yogurts) {
      state.Yogurts = Yogurts;
    },
  },
  actions: {
    async fetchYogurts({ commit }) {
      const response = await axios.get("./json/Yogurts.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setYogurts", response.data);
    },
  },
};
export default Yogurts;
