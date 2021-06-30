<template>
  <div class="container" style="margin-top: 150px">
    <br />
    <div class="row">
      <div class="col-12 bg-all">
        <div class="txt d-flex align-items-center justify-content-center">
          <span class="align-self-stretch"> یک دعوت 100 میلیون تومانی</span>
          <div class="btn-txt">
            <font-awesome-icon
              class="fs-6"
              :icon="['fa', 'chevron-left']"
            ></font-awesome-icon>
          </div>
        </div>
        <img
          src="../../../../../public/img/DGkala/topslider.png"
          class="img imgleft"
        />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-8 px-5">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../../../../public/img/slider/slide1.png"
                class="d-block"
                style="width: 100%; height: 400px"
                alt="..."
              />
              <div class="position-absolute text-white txtplay">
                <h3>
                  شما بگویید:Xbox Series یا Play Station5
                  <div class="btn-txt">
                    <font-awesome-icon
                      class="fs-5"
                      :icon="['fa', 'chevron-left']"
                    />
                  </div>
                </h3>
              </div>
            </div>
            <div
              class="carousel-item position-relative"
              v-for="image in images"
              :key="image.id"
            >
              <img
                :src="image.imageUrl"
                class="d-block"
                style="width: 100%; height: 400px"
                alt="..."
              />
              <div
                class="position-absolute text-white txt2"
                v-if="
                  image.id == 2 ||
                  image.id == 4 ||
                  image.id == 5 ||
                  image.id == 6 ||
                  image.id == 8
                "
              >
                <h1>{{ image.title }}</h1>
                <div class="d-flex justify-content-center">
                  <p>
                    {{ image.description }}
                  </p>
                  <div class="btn-txt">
                    <font-awesome-icon
                      class="fs-5"
                      :icon="['fa', 'chevron-left']"
                    />
                  </div>
                </div>
              </div>
              <div class="position-absolute text-white txt1" v-else>
                <h2>{{ image.title }}</h2>
                <div class="d-flex">
                  <p>
                    {{ image.description }}
                  </p>
                  <div class="btn-txt">
                    <font-awesome-icon
                      class="fs-5"
                      :icon="['fa', 'chevron-left']"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img
                src="../../../../../public/img/slider/slide3.png"
                class="d-block w-100"
                alt="..."
              />
            </div> -->
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-12 bg-leftslide mb-3">
            <div class="txt-leftslide d-flex flex-column text-center">
              <span>DIGISTYLE</span>
              <b>استایل یک روز آفتابی</b>
              <span class="fs-1 text-danger"> 70%OFF</span>
              <small class="d-flex text-muted">به مناسبت روز عینک آفتابی
                <div class="btn-txt text-translate">
                
                <font-awesome-icon
                  class="fs-6"
                  :icon="['fa', 'chevron-left']"
                ></font-awesome-icon>
              </div>
              </small>
            </div>
            <img
              src="../../../../../public/img/DGkala/leftslider1.png"
              class="img imgleft"
            />
          </div>
          <div class="col-12 bg-leftslide">
            <img
              src="../../../../../public/img/DGkala/leftslider2.png"
              class="img imgleft"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
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
  components: { FontAwesomeIcon },
};
</script>

<style scoped lang="scss">
.txtplay {
  top: 30px;
  right: 150px;
}
.txt1 {
  top: 5px;
  right: 300px;
}
.txt2 {
  top: 40%;
  right: 100px;
}
.bg-all {
  height: 100px;
  position: relative;
  z-index: 1;
  color: #000;
  text-align: right;
}
.bg-leftslide {
  height: 190px;
  position: relative;
  z-index: 1;
  color: #000;
  text-align: right;
}
.txt {
  font-size: 32px;
  font-weight: 800;
  position: absolute;
  bottom: 30%;
  right: 40%;
  z-index: 3;
  color: #fff;
}
.txt-leftslide {
  font-weight: 800;
  position: absolute;
  top: 30px;
  right: 4px;
  z-index: 3;
  color: #000;
}

.img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>
