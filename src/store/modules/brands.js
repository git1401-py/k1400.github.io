import axios from "axios";

const brands = {
  namespaced: true,
  state: {
    brands: [],
  },
  getters: {
    allProducts(state) {
      return state.brands;
    },
  },
  mutations: {
    setbrands(state, brands) {
      state.brands = brands;
    },
  },
  actions: {
    async fetchBrands({ commit }) {
      const response = await axios.get("./json/brands.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setbrands", response.data);
    },
  },
};
export default brands;
