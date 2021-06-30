import axios from "axios";

const markets = {
  namespaced: true,
  state: {
    markets: [],
  },
  getters: {
    allProducts(state) {
      return state.markets;
    },
  },
  mutations: {
    setMarkets(state, markets) {
      state.markets = markets;
    },
  },
  actions: {
    async fetchMarket({ commit }) {
      const response = await axios.get("./json/market.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setMarkets", response.data);
    },
  },
};
export default markets;
