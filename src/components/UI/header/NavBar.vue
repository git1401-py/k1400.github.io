<template>
  <div class="container-fluid m-0 top-0 end-0 zindex">
    <top-header />
    <div class="container-fluid position-fixed bg-white end-0" style="top:60px" id="top-position">
      <search-header />
      <transition name="fade">
        <div
          v-show="shouldShow"
          class="row align-items-center justify-content-between"
        >
          <div class="col-8 px-0">
            <ul class="nav nav-pills px-0">
              <li class="nav-item p-0" id="cartDropdown">
                <dropdown class="nav-link">
                  <template v-slot:trigger>
                    <div class="d-flex align-items-center">
                      <span>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                      </span>
                      <span class="p-2"> دسته بندی کالاها</span>
                    </div>
                  </template>
                  <div
                    class="h-50 position-relative"
                    style="background: gray; height: 100px"
                  >
                    <nav-items-dropdown />
                  </div>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <dropdown class="nav-link borderRight p-3">
                  <template v-slot:trigger> سوپرمارکت </template>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <dropdown class="nav-link p-3 px-0">
                  <template v-slot:trigger>
                    <span class="p-3"> تخفیفات و پیشنهادها </span>
                  </template>
                  <div
                    class="h-50 position-relative"
                    style="background: gray; height: 100px"
                  >
                    <nav-items-sugestion />
                  </div>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <a class="nav-link p-3"> دیجی کالای من </a>
              </li>
              <li class="nav-item p-0">
                <dropdown class="nav-link p-3 px-0">
                  <template v-slot:trigger>
                    <span class="p-3"> دیجی پلاس </span>
                  </template>
                  <div
                    class="h-50 position-relative"
                    style="background: gray; height: 100px"
                  >
                    <nav-items-dgplus />
                  </div>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <dropdown class="nav-link p-3 px-0">
                  <template v-slot:trigger>
                    <span class="p-3"> دیجی کلاب </span>
                  </template>
                  <div
                    class="h-50 position-relative"
                    style="background: gray; height: 100px"
                  >
                    <nav-items-dgclub />
                  </div>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <dropdown class="nav-link p-3 px-0">
                  <template v-slot:trigger>
                    <span class="p-3">دیجی پی </span>
                  </template>
                  <div
                    class="h-50 position-relative"
                    style="background: gray; height: 100px"
                  >
                    <nav-items-dgpi />
                  </div>
                </dropdown>
              </li>
              <li class="nav-item p-0">
                <a class="nav-link p-3">سوالی دارید؟</a>
              </li>
              <li class="nav-item p-0">
                <a class="nav-link p-3">فروشنده شوید</a>
              </li>
            </ul>
          </div>
          <div class="col-4 d-flex justify-content-end ps-4">
            <a class="text-muted text-decoration-none"
              >لطفا شهر و استان خود را انتخاب کنید</a
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import SearchHeader from "./SearchHeader.vue";
// import NavItem from "./NavItem.vue";
import Dropdown from "./Dropdown.vue";
import NavItemsDropdown from "./NavItems/NavItemsDropdown.vue";
import NavItemsSugestion from "./NavItems/NavItemsSugestion.vue";
import NavItemsDgplus from "./NavItems/NavItemsDgplus.vue";
import NavItemsDgclub from "./NavItems/NavItemsDgclub.vue";
import NavItemsDgpi from "./NavItems/NavItemsDgpi.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    TopHeader,
    SearchHeader,
    Dropdown,
    NavItemsDropdown,
    NavItemsSugestion,
    NavItemsDgplus,
    NavItemsDgclub,
    NavItemsDgpi,
    // NavItem,
  },
  props: [],

  setup() {
    const shouldShow = ref(true);
    const topgetting = ref(0);
    function scrollDetect() {
      var lastScroll = 0;

      window.onscroll = function () {
          // console.log(document.documentElement.scrollTop)

        let currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
        // console.log("currentScroll:" + currentScroll);
        if (
          document.documentElement.scrollTop > 60 
        ) {

          document.getElementById("top-position").style.top = "0px"; 
        }
        else {
          topgetting.value = 60 - document.documentElement.scrollTop;
          document.getElementById("top-position").style.top = `${topgetting.value}px`; 
        }
        if (currentScroll > 0 && lastScroll <= currentScroll) {
          lastScroll = currentScroll;
          shouldShow.value = false;
        } else {
          lastScroll = currentScroll;
          shouldShow.value = true;
        }
      };
    }
    scrollDetect();
    return {
      shouldShow,
      topgetting
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zindex {
  position: relative;
  z-index: 9 !important;
}
.borderRight {
  border-right: 1px solid #888;
}
.line1,
.line2,
.line3 {
  width: 15px;
  height: 2px;
  margin: 3px;
  background: #555 !important;
  transition: all 0.4s;
}
.change .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.change .line2 {
  opacity: 0;
}
.change .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav .nav-link {
  border-radius: 0;
  position: relative;
  cursor: pointer;
  color: #555 !important;
}
.nav .active {
  background-color: white !important;
  color: black !important;
}
.nav .nav-link::before {
  content: "";
  position: absolute;
  right: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: red;
  transition: all 0.4s ease;
}
.nav .nav-link:hover::before {
  width: 50%;
}
.nav .nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: red;
  transition: all 0.4s ease;
}
.nav .nav-link:hover::after {
  width: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
