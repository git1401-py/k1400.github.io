<template>
  <div class="container rounded-3">
    <div class="row">
      <div v-if="section == 'mobiles'" class="col-3 bg-white ms-2 rounded-3" style="margin-right:-32px">
        <img src="../../../../public/img/DGkala/6a.png" class="mt-3" alt="" />
        <h5 class="p-5">شخصی سازی پیشنهادها</h5>

        <p class="text-muted fs-3">
          برای مشاهده پیشنهادهای مناسب خود و همچنین داشتن تجربه بهتر لطفا وارد
          حساب کاربری شوید.
        </p>
        <button class="btn btn-danger">ورود به حساب دیجی کالا</button>
        <p class="text-muted">
          <small>ثبت نام رایگان در صورت نداشتن حساب کاربری</small>
        </p>
      </div>

      <div class="col-9 bg-white rounded-3" >
        <div class="row p-3">
          <div class="col-2 text-end border-bottom border-danger m-0 ms-4 pb-2">
            <h5 v-if="section == 'mobiles'">گوشی موبایل</h5>
            <h5 v-if="section == 'yogurts'">ماست</h5>
            بر اساس بازدید های شما
          </div>
          <div class="col-9 border-bottom border-secondery m-0"></div>
        </div>
        <div
         v-if="section == 'mobiles'"
          id="carouselmobiles"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <mobile-items :products="mobiles" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselmobiles"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon">
              <font-awesome-icon
                class="fs-3"
                style="color: #000"
                :icon="['fa', 'chevron-left']"
              />
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next bg-light shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselmobiles"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              <font-awesome-icon
                class="fs-3"
                style="color: #000"
                :icon="['fa', 'chevron-right']"
              />
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div
         v-if="section == 'yogurts'"
          id="carouselyogurts"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <mobile-items :products="yogurts" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselyogurts"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon">
              <font-awesome-icon
                class="fs-3"
                style="color: #000"
                :icon="['fa', 'chevron-left']"
              />
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next bg-light shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselyogurts"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              <font-awesome-icon
                class="fs-3"
                style="color: #000"
                :icon="['fa', 'chevron-right']"
              />
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div v-if="section == 'yogurts'" class="col-3 bg-white me-2 rounded-3" style="margin-left:-32px">
        <div class="position-relative">
          <h5 class="p-5 borderBottom">پیشنهادهای لحظه ای برای شما</h5>
        </div>
        

        <small-carousel :slides="slides"/>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MobileItems from "./SlideShow/MultiItem/MobileItems.vue";
import SmallCarousel from "./SlideShow/SmallCarousel.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: ["section"],
  setup() {
    const store = useStore();

    const mobiles = computed(() => store.getters["mobiles/allProducts"]);
    const yogurts = computed(() => store.getters["yogurts/allProducts"]);
    const slides = computed(() => store.getters["mobiles/allProducts"]);

    // const loading = ref(false);

    async function fetchMobiles() {
      // loading.value = true;
      await store.dispatch("mobiles/fetchMobiles");
      // loading.value = false;
    }
    fetchMobiles();
    async function fetchYogurts() {
      // loading.value = true;
      await store.dispatch("yogurts/fetchYogurts");
      // loading.value = false;
    }
    fetchYogurts();
    return {
      mobiles,
      yogurts,
      slides
      // loading
    };
  },
  components: { MobileItems,SmallCarousel, FontAwesomeIcon },
};
</script>

<style scoped>
.borderBottom::before{
  content: '';
  position: absolute;
  bottom:5px;
  left:0;
  height: 1px;
  width:100%;
   background: red;
  animation-name: border;
  animation-duration: 4.55s;
  animation-iteration-count: infinite;
}
@keyframes border {
  from{ width:0; }
  to { width:100%; }
  
}
</style>
