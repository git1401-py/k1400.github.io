import axios from "axios";

const books = {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    allProducts(state) {
      return state.books;
    },
  },
  mutations: {
    setbooks(state, books) {
      state.books = books;
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      const response = await axios.get("./json/books.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
      commit("setbooks", response.data);
    },
  },
};
export default books;
