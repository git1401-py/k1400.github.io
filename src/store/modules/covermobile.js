import axios from "axios";

const covermobile = {
  namespaced: true,
  state: {
    covermobile: [],
  },
  getters: {
    allProducts(state) {
      return state.covermobile;
    },
  },
  mutations: {
    setcovermobile(state, covermobile) {
      state.covermobile = covermobile;
    },
  },
  actions: {
    async fetchCovermobile({ commit }) {
      const response = await axios.get("./json/covermobile.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setcovermobile", response.data);
    },
  },
};
export default covermobile;
