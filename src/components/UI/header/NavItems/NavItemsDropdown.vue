\
<template>
  <!-- <ul class="dropdown-menu mega-dropdown-menu" aria-labelledby="everything"> -->
  <div class="container nav-position">
    <div class="row pt-3">
      <div class="col-2 border-start p-0">
        <ul class="px-0 sugestion text-end">
          <li @mouseenter="name = 'digital'">کالای دیجیتال</li>
          <li @mouseenter="name = 'device'">خودرو،ابزار و تجهیزات صنعتی</li>
          <li @mouseenter="name = 'clothes'">مد و پوشاک</li>
          <li @mouseenter="name = 'toys'">اسباب بازی، کودک و نوزاد</li>
          <li @mouseenter="name = 'market'">کالاهای سوپرمارکتی</li>
          <li @mouseenter="name = 'beauty'">زیبایی و سلامت</li>
          <li @mouseenter="name = 'kitchen'">خانه و آشپزخانه</li>
          <li @mouseenter="name = 'books'">کتاب و لوازم تحریر و هنر</li>
          <li @mouseenter="name = 'travel'">ورزش و سفر</li>
          <li @mouseenter="name = 'native'">محصولات بومی و محلی</li>
        </ul>
      </div>
      <div class="col-10 p-0">
        <template v-if="name == 'digital'"><digital /></template>

        <template v-else-if="name == 'device'"><device /></template>
        <div v-else-if="name == 'clothes'"><clothes /></div>
        <div v-else-if="name == 'toys'"><toys /></div>

        <div v-else-if="name == 'market'"><market /></div>
        <div v-else-if="name == 'beauty'"><beauty /></div>
        <div v-else-if="name == 'kitchen'"><kitchen /></div>

        <div v-else-if="name == 'books'"><books /></div>
        <div v-else-if="name == 'travel'"><travel /></div>
        <div v-else-if="name == 'native'"><native /></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Dropdownsugestion from "../Dropdownsugestion.vue";
import digital from "../sugestionOption/digital.vue";
import beauty from "../sugestionOption/beauty.vue";
import books from "../sugestionOption/books.vue";
import clothes from "../sugestionOption/clothes.vue";
import device from "../sugestionOption/device.vue";
import kitchen from "../sugestionOption/kitchen.vue";
import market from "../sugestionOption/market.vue";
import native from "../sugestionOption/native.vue";
import toys from "../sugestionOption/toys.vue";
import travel from "../sugestionOption/travel.vue";
// import { ref } from "@vue/reactivity";
export default {
  // setup() {
  //   const name = ref("digital");
  //   return {
  //     name,
  //   };
  // },
  data() {
    return {
      name: "digital",
    };
  },
  components: {
    digital,
    beauty,
    books,
    clothes,
    device,
    kitchen,
    market,
    native,
    toys,
    travel,
  },
  methods: {},
};
</script>

<style scoped>
.nav-position {
  position: absolute;
  top: 8px;
  right: -15px;
  width: 100vw;
  height: 420px;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  /* border: 2px solid #eee; */
  z-index: 2;
}
.nav-position ul li {
  list-style: none;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.nav-position ul li:hover {
  background: #eee;
  color: red;
}
.dropdown-clip {
  overflow: hidden;
}

.dropdown-enter-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.dropdown-leave-active {
  transition: all 1s ease-in-out;
  transform: auto;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}
</style>
