import axios from "axios";

const sugestions = {
  namespaced: true,
  state: {
    sugestions: [],
    

  },
  getters: {
    allProducts(state) {
      console.log(state.sugestions[1]);

      return state.sugestions;
    },
  },
  mutations: {
    setSugestions(state, sugestions) {
        console.log(sugestions);
      state.sugestions = sugestions;
      console.log(state.sugestions);

    },
  },
  actions: {
    async fetchSugestions({ commit }) {
      //   try{
      //     let response = await fetch("./json/sugestion.json");
      //     if (response.ok) {
      //       console.log(response.json());

      //       let sugestions = await response.json();
      //       console.log(sugestions);
      //       commit({
      //         type: "setSugestions",
      //         sugestions,
      //       });
      //     } else {
      //       throw Error(response.status);
      //     }
      //   }catch(err){console.log(err);
      //   }

      // await fetch("./json/sugestion.json", {
      //   headers: {
      //     "Content-Type": "application/json; charset=UTF-8",

      //     Accept: "application/json",
      //   },
      // })
      //   .then(function (response) {
      //     console.log(response);

      //     return response.json();
      //   })

      //   .then(function (sugestions) {
      //     console.log(sugestions);
      //     commit("setSugestions", sugestions);
      //   });


      const response = await axios.get("./json/sugestion.json", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",

          Accept: "application/json",
        },
      });
        
          commit("setSugestions", response.data);
        


    },
  },
};
export default sugestions;
