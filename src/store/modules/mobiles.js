import axios from "axios";

const mobiles = {
  namespaced: true,
  state: {
    mobiles: [],
  },
  getters: {
    allProducts(state) {
      return state.mobiles;
    },
  },
  mutations: {
    setMobiles(state, mobiles) {
      state.mobiles = mobiles;
    },
  },
  actions: {
    async fetchMobiles({ commit }) {
      const response = await axios.get("./json/mobile.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setMobiles", response.data);
    },
  },
};
export default mobiles;
