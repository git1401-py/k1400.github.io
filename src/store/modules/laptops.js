import axios from "axios";

const laptops = {
  namespaced: true,
  state: {
    laptops: [],
  },
  getters: {
    allProducts(state) {
      return state.laptops;
    },
  },
  mutations: {
    setlaptops(state, laptops) {
      state.laptops = laptops;
    },
  },
  actions: {
    async fetchLaptops({ commit }) {
      const response = await axios.get("./json/laptop.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setlaptops", response.data);
    },
  },
};
export default laptops;
