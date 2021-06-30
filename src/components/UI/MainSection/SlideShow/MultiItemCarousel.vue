<template>
  <div class="container-fluid">
    <div
      class="row p-3"
      :class="{
        'bg-danger': section == 'sugestion',
        bgsuccess: section == 'market',
      }"
    >
      <div class="col-2 position-relative py-1">
        <div
          class="d-flex flex-column align-items-end"
          style="width: 100%; height: 80%"
        >
          <h5
            v-if="section == 'sugestion'"
            class="text-light fs-1 pt-4 d-flex flex-column"
          >
            <b>پیشنهاد</b>
            <b> شگفت</b>
            <b>انگیز</b>
          </h5>
          <h5 v-else class="text-light fs-1 pt-4 d-flex flex-column">
            <b>شگفت</b>
            <b> انگیز</b>
            <b>سوپرمارکتی</b>
          </h5>
          <img
            v-if="section == 'sugestion'"
            src="../../../../../public/img/DGkala/2aaa.png"
            class=""
            style="width: 150px; height: 150px"
          />
          <img
            v-else
            src="../../../../../public/img/DGkala/4aa.png"
            class=""
            style="width: 150px; height: 150px"
          />

          <a
            class="btn btn-outline-light mt-5 px-3 d-flex align-items-center"
            style="border-radius: 10px"
          >
            <span class="px-2">مشاهده همه</span>
            <font-awesome-icon
              class="fs-6 ps-1"
              :icon="['fa', 'chevron-left']"
            />
          </a>
        </div>
      </div>
      <div class="col-9 p-0 mx-5 my-auto">
        <div
          v-if="section == 'sugestion'"
          id="carouselsugestions"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <items :products="sugestions" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselsugestions"
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
            data-bs-target="#carouselsugestions"
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
          v-else
          id="carouselmarket"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <items :products="markets" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselmarket"
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
            data-bs-target="#carouselmarket"
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
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Items from "./MultiItem/Items.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: ["section"],
  setup() {
    const store = useStore();

    const sugestions = computed(() => store.getters["sugestions/allProducts"]);
    const markets = computed(() => store.getters["markets/allProducts"]);

    // const loading = ref(false);

    async function fetchSugestion() {
      // loading.value = true;
      await store.dispatch("sugestions/fetchSugestions");
      // loading.value = false;
    }
    fetchSugestion();
    async function fetchMarket() {
      // loading.value = true;
      await store.dispatch("markets/fetchMarket");
      // loading.value = false;
    }
    fetchMarket();
    return {
      sugestions,
      markets,
      // loading
    };
  },
  components: {
    FontAwesomeIcon,
    Items,
  },
};
</script>

<style scoped lang="scss">
.bgsuccess {
  background: rgb(122, 185, 20);
}
</style>
