import axios from "axios";

const vatesproducts = {
  namespaced: true,
  state: {
    vatesproducts: [],
  },
  getters: {
    allProducts(state) {
      return state.vatesproducts;
    },
  },
  mutations: {
    setvatesproducts(state, vatesproducts) {
      state.vatesproducts = vatesproducts;
    },
  },
  actions: {
    async fetchVatesproducts({ commit }) {
      const response = await axios.get("./json/vatesproducts.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setvatesproducts", response.data);
    },
  },
};
export default vatesproducts;
