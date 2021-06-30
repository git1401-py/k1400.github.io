<template>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row p-2">
        <template v-for="product in products" :key="product.id">
          <div class="col-3" v-if="product.id < 5">
            <div class="card p-3">
              <img
                :src="product.music_url"
                class="card-img-top my-0 mx-auto"
                style="width: 85px; height: 170px"
              />
              <div class="my-5 text-start">
                <h6 class="text-end text-muted">
                   {{ product.name }}
                </h6>
                <b> {{ product.price }} <small> تومان</small></b>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="carousel-item ">
      <div class="row p-2">
        <template v-for="product in products" :key="product.id">
          <div class="col-3" v-if="product.id > 4 && product.id < 9">
            <div class="card p-3">
              <img
                :src="product.music_url"
                class="card-img-top my-0 mx-auto"
                style="width: 85px; height: 170px"
              />
              <div class="my-5 text-start">
                <h6 class="text-end text-muted">
                   {{ product.name }}
                </h6>
                <b> {{ product.price }} <small> تومان</small></b>
              </div>
            </div>
          </div>
        </template>
        
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["products"],
  setup() {
    let productLength = ref(0);
    // productLength.value = props.products.length;
    // console.log("L:" + props.products.length);

    return {
      productLength,
    };
  },
};
</script>
<style scoped>
.card {
  border: none !important;
  transition: all 0.4s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 2px 5px 10px #eee, -2px 5px 10px #eee;
}
</style>
<!-- <div class="col-3">
      <div class="card p-3">
        <img
          src="../../../../../../public/img/mobile/5m2.png"
          class="card-img-top my-0 mx-auto"
          style="width: 85px; height: 170px"
        />
        <div class="my-5 text-start">
          <h6 class="text-end text-muted">
            گوشی موبایل سامسونگ مدل Galaxy A221S SM
          </h6>
          <b>4130000 <small> تومان</small></b>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card p-3">
        <img
          src="../../../../../../public/img/mobile/5m3.png"
          class="card-img-top my-0 mx-auto"
          style="width: 85px; height: 170px"
        />
        <div class="my-5 text-start">
          <h6 class="text-end text-muted">
            گوشی موبایل سامسونگ مدل Galaxy A221S SM
          </h6>
          <b>4130000 <small> تومان</small></b>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card p-3">
        <img
          src="../../../../../../public/img/mobile/5m4.png"
          class="card-img-top my-0 mx-auto"
          style="width: 85px; height: 170px"
        />
        <div class="my-5 text-start">
          <h6 class="text-end text-muted">
            گوشی موبایل سامسونگ مدل Galaxy A221S SM
          </h6>
          <b>4130000 <small> تومان</small></b>
        </div>
      </div>
    </div> -->