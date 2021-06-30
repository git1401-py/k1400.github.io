<template>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <template v-for="product in products" :key="product.id">
          <div class="col-3" v-if="product.id < 5">
            <div class="card">
              <img
                :src="product.music_url"
                class="card-img-top"
                style="width: 100%; height: 200px"
              />
              <div class="card-body text-start">
                <h5 class=" text-end">{{ product.name }}</h5>
                <p class=" text-end"> <span v-if="product.gift">{{ product.gift }} تومان هدیه نقدی</span><span v-else><br></span></p>
                <div class="">
                  <b class="text-danger text-end"  v-if="product.app">اختصاصی اپلیکیشن</b>
                  <span class=" text-start">
                    <del> {{ product.price }}</del>
                    <span class="badge rounded-circle bg-danger">
                      {{ product.vate }}%
                    </span>
                  </span>
                </div>
                <p class="text-start">
                  <b>{{ (product.price * (100-product.vate)) / 100 }}</b>
                </p>
                <div class="text-muted d-flex justify-content-between">
                  <span><b class="text-danger">34%</b> فروش رفته</span>
                  <span>{{ product.timer }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="carousel-item position-relative">
      <div class="row">
        <template v-for="product in products" :key="product.id">
          <div class="col-3" v-if="product.id == 5 || product.id == 6 || product.id == 7">
            <div class="card">
              <img
                :src="product.music_url"
                class="card-img-top"
                style="width: 100%; height: 200px"
              />
              <div class="card-body text-start">
                <h5 class=" text-end">{{ product.name }}</h5>
                <p class=" text-end"> <span v-if="product.gift">{{ product.gift }} تومان هدیه نقدی</span><span v-else><br></span></p>
                <div class="">
                  <b class="text-danger text-end"  v-if="product.app">اختصاصی اپلیکیشن</b>
                  <span class=" text-start">
                    <del> {{ product.price }}</del>
                    <span class="badge rounded-circle bg-danger">
                      {{ product.vate }}%
                    </span>
                  </span>
                </div>
                <p class="text-start">
                  <b>{{ (product.price * (100-product.vate)) / 100 }}</b>
                </p>
                <div class="text-muted d-flex justify-content-between">
                  <span><b class="text-danger">34%</b> فروش رفته</span>
                  <span>{{ product.timer }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-3 px-1" v-if="product.id == 8">
            <div
              
              class="card"
              style="height: 100%; padding: auto"
            >
              <div
                class="
                  card-body
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <a
                  class="
                    btn btn-outline-dark
                    border-0 border-start border-end
                    d-flex
                    align-items-center
                    w-50
                  "
                  style="border-radius: 10px; margin: auto 0"
                >
                  <span class="p-2">مشاهده همه</span>
                  <font-awesome-icon
                    class="fs-6 ps-1"
                    :icon="['fa', 'chevron-left']"
                  />
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  props: ["products"],
  components: { FontAwesomeIcon },
};
</script>

<style></style>
