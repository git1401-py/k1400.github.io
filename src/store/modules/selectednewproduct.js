import axios from "axios";

const selectednewproduct = {
  namespaced: true,
  state: {
    selectednewproduct: [],
  },
  getters: {
    allProducts(state) {
      return state.selectednewproduct;
    },
  },
  mutations: {
    setSelectednewproduct(state, selectednewproduct) {
      state.selectednewproduct = selectednewproduct;
    },
  },
  actions: {
    async fetchSelectednewproduct({ commit }) {
      const response = await axios.get("./json/selectednewproduct.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setSelectednewproduct", response.data);
    },
  },
};
export default selectednewproduct;
