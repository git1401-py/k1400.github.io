<template>
  <div class="container rounded-3">
    <div class="row">
      <div class="col-12 bg-white rounded-3">
        <div class="row p-3">
          <div class="col-2 text-end border-bottom border-danger m-0 ms-4 pb-2">
            <h5 v-if="section == 'recentselse'">محصولات پربازدید اخیر</h5>
            <h5 v-if="section == 'selectednewproduct'">
              منتخب جدیدترین کالاها
            </h5>
            <h5 v-if="section == 'popularproduct'">محصولات پرفروش اخیر</h5>
            <h5 v-if="section == 'brands'">برندهای ویژه</h5>
            <h5 v-if="section == 'vatesproducts'">
              منتخب محصولات تخفیف و حراج
            </h5>
            <h5 v-if="section == 'laptops'">لب تاب</h5>
            <h5 v-if="section == 'watches'">ساعت</h5>
            <h5 v-if="section == 'covermobile'">کاور گوشی</h5>
            <h5 v-if="section == 'handsfree'">هندزفری</h5>
            <h5 v-if="section == 'books'">کتاب</h5>
            بر اساس بازدید های شما
          </div>
          <div class="col-9 border-bottom border-secondery m-0"></div>
        </div>

        <div
            v-if="section == 'recentselse'"           
          id="carouselrecentselse"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="recentselse"/>
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselrecentselse"
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
            data-bs-target="#carouselrecentselse"
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
            v-if="section == 'selectednewproduct'"
          id="carouselselectednewproduct"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="selectednewproduct"/>
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselselectednewproduct"
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
            data-bs-target="#carouselselectednewproduct"
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
            v-if="section == 'popularproduct'"
          id="carouselpopularproduct"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="popularproduct"/>
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselpopularproduct"
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
            data-bs-target="#carouselpopularproduct"
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
         v-if="section == 'brands'"
          id="carouselbrands"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="brands" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselbrands"
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
            data-bs-target="#carouselbrands"
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
            v-if="section == 'vatesproducts'"
          id="carouselvatesproducts"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="vatesproducts"/>
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselvatesproducts"
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
            data-bs-target="#carouselvatesproducts"
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
        v-if="section == 'laptops'" 
          id="carousellaptops"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="laptops" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carousellaptops"
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
            data-bs-target="#carousellaptops"
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
        v-if="section == 'watches'" 
          id="carouselwatches"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="watches" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselwatches"
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
            data-bs-target="#carouselwatches"
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
            v-if="section == 'covermobile'"
          id="carouselcovermobile"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="covermobile"/>
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselcovermobile"
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
            data-bs-target="#carouselcovermobile"
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
        v-if="section == 'handsfree'" 
          id="carousehandsfree"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="handsfree" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carousehandsfree"
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
            data-bs-target="#carousehandsfree"
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
        v-if="section == 'books'" 
          id="carouselbooks"
          class="carousel slide"
          data-bs-interval="false"
          data-bs-ride="carousel"
        >
          <product-items :products="books" />
          <button
            class="carousel-control-prev bg-light border-secondary shadow"
            style="width: 5%; height: 20%; margin: auto 0"
            type="button"
            data-bs-target="#carouselbooks"
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
            data-bs-target="#carouselbooks"
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
import ProductItems from "./SlideShow/MultiItem/ProductItems.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: ["section"],
  setup() {
    const store = useStore();

    const  recentselse= computed(() => store.getters["recentselse/allProducts"]);
    const  selectednewproduct= computed(() => store.getters["selectednewproduct/allProducts"]);
    const popularproduct = computed(() => store.getters["popularproduct/allProducts"]);
    const brands = computed(() => store.getters["brands/allProducts"]);
    const  vatesproducts= computed(() => store.getters["vatesproducts/allProducts"]);
    const laptops = computed(() => store.getters["laptops/allProducts"]);
    const watches = computed(() => store.getters["watches/allProducts"]);
    const covermobile = computed(() => store.getters["covermobile/allProducts"]);
    const handsfree = computed(() => store.getters["handsfree/allProducts"]);
    const books = computed(() => store.getters["books/allProducts"]);
    // const loading = ref(false);

    async function fetchRecentselse() {
      // loading.value = true;
      await store.dispatch("recentselse/fetchRecentselse");
      // loading.value = false;
    }
    fetchRecentselse();
    async function fetchSelectednewproduct() {
      // loading.value = true;
      await store.dispatch("selectednewproduct/fetchSelectednewproduct");
      // loading.value = false;
    }
    fetchSelectednewproduct();
    async function fetchPopularproduct() {
      // loading.value = true;
      await store.dispatch("popularproduct/fetchPopularproduct");
      // loading.value = false;
    }
    fetchPopularproduct();
    async function fetchBrands() {
      // loading.value = true;
      await store.dispatch("brands/fetchBrands");
      // loading.value = false;
    }
    fetchBrands();
    async function fetchVatesproducts() {
      // loading.value = true;
      await store.dispatch("vatesproducts/fetchVatesproducts");
      // loading.value = false;
    }
    fetchVatesproducts();
    async function fetchLaptops() {
      // loading.value = true;
      await store.dispatch("laptops/fetchLaptops");
      // loading.value = false;
    }
    fetchLaptops();
    async function fetchWatches() {
      // loading.value = true;
      await store.dispatch("watches/fetchWatches");
      // loading.value = false;
    }
    fetchWatches();
    async function fetchCovermobile() {
      // loading.value = true;
      await store.dispatch("covermobile/fetchCovermobile");
      // loading.value = false;
    }
    fetchCovermobile();
    async function fetchHandsfree() {
      // loading.value = true;
      await store.dispatch("handsfree/fetchHandsfree");
      // loading.value = false;
    }
    fetchHandsfree();
    async function fetchBooks() {
      // loading.value = true;
      await store.dispatch("books/fetchBooks");
      // loading.value = false;
    }
    fetchBooks();
    
    return {
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
      // loading
    };
  },
  components: { ProductItems, FontAwesomeIcon },
};
</script>

<style scoped></style>
