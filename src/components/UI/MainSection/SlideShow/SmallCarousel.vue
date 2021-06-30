<template>
  <div class="container-fluid" style="">
    <div class="row">
      <div class="col-12">
        <div
          id="carouselslides"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <template v-for="slide in slides" :key="slide.id">
              <div class="carousel-item active" v-if="slide.id == 1">
                <div class="cart">
                  <img :src="slide.music_url" class="cart-img-top" />
                  <div class="cart-body">
                    <h6 class="text-muted text-end p-3">{{ slide.name }}</h6>
                    <div class="cart-footer text-start">
                      <span class=""> {{ slide.price }}تومان </span>
                    </div>
                  </div>
                </div>
              </div>
              </template>
            <template v-for="slide in slides" :key="slide.id">
              <div class="carousel-item" v-if="slide.id != 1">
                <div class="cart">
                  <img :src="slide.music_url" class="cart-img-top" />
                  <div class="cart-body">
                    <h6 class="text-muted text-end p-3">{{ slide.name }}</h6>
                    <div class="cart-footer text-start">
                      <span class=""> {{ slide.price }}تومان </span>
                    </div>
                  </div>
                </div>
              </div>
              </template>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselslides"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselslides"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slides"],
  data() {
    return {
      parallaxSwiperWidth: 0,
      images: [
        // {
        //   id: 1,
        //   imageUrl: require("../../../../../public/img/slider/slide1.png"),
        //   title: "شما بگویید:Xbox Series یا Play Station5",
        //   description: "",
        // },
        {
          id: 2,
          imageUrl: require("../../../../../public/img/slider/slide2.png"),
          title: "digiclub",
          description: "تو دیجی کلاب، امتیازت کار نیکه!",
        },
        {
          id: 3,
          imageUrl: require("../../../../../public/img/slider/slide3.png"),
          title: "این شروع یه حال خوبه!",
          description: "همان طعم محبوب این بار شیر سرد",
        },
        {
          id: 4,
          imageUrl: require("../../../../../public/img/slider/slide4.png"),
          title: "تازه مثل بهار",
          description: "جذاب مثل تابستون",
        },
        {
          id: 5,
          imageUrl: require("../../../../../public/img/slider/slide5.png"),
          title: "digiclub",
          description: "فصل رنگارنگ جایزه ها",
        },
        {
          id: 6,
          imageUrl: require("../../../../../public/img/slider/slide6.png"),
          title: "گردونه شانس!",
          description: "ویژه خرید اولی ها",
        },
        {
          id: 7,
          imageUrl: require("../../../../../public/img/slider/slide7.png"),
          title: "جام پیش بینی یورو 2020",
          description: "پیش بینی کن، جایزه ببر!",
        },
        {
          id: 8,
          imageUrl: require("../../../../../public/img/slider/slide8.png"),
          title: "یه دعوت 100 میلیونی",
          description: "می تونی 100 میلیون تومان برنده شی!",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
