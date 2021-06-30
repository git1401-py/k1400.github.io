import { createStore } from "vuex";
import sugestions from "./modules/sugestions";
import markets from "./modules/market.js";
import mobiles from "./modules/mobiles.js";
import yogurts from "./modules/Yogurts.js";
import recentselse from "./modules/recentselse.js";
import selectednewproduct from "./modules/selectednewproduct.js";
import popularproduct from "./modules/popularproduct.js";
import brands from "./modules/brands.js";
import vatesproducts from "./modules/vatesproducts.js";
import laptops from "./modules/laptops.js";
import watches from "./modules/watches.js";
import covermobile from "./modules/covermobile.js";
import handsfree from "./modules/handsfree.js";
import books from "./modules/books.js";

export default createStore({
  modules: {
    sugestions,
    markets,
    mobiles,
    yogurts,
    recentselse,
    selectednewproduct,
    popularproduct,
    brands,
    vatesproducts,
    laptops,
    watches,
    covermobile,
    handsfree,
    books,
  },
});
