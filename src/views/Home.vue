<template>
  <div class="home bg-secondary overflow-scroll">
    <div class="" id="categories"></div>
    <nav-bar />
    <br>
    <carousel-slider> </carousel-slider>
    <br>
    <multi-carousel section="sugestion"/>
    <br>
    <top-market />
    <br>
    <multi-carousel section="market"/>
    <br>
    <top-mobile />
    <br>
    <mobile section="yogurts"/>
    <br> 
    <top-yogurt />
    <br>
    <mobile section="mobiles"/>  
    <br>
    <top-handsfri />
    <br>
    <laptop-slider section="handsfree" />
    <br>
    <laptop-slider section="books" />
    <br>
     <top-book />
    <br>
    <laptop-slider section="laptops" />
    <br>
    <laptop-slider section="watches" />
    <br>
    <laptop-slider section="popularproduct" />
    <br>
    <top-new />
    <br>
    <laptop-slider section="selectednewproduct" />
    <br>
    <laptop-slider section="recentselse" />
    <br>
    <laptop-slider section="brands" />
    <br>
    <laptop-slider section="vatesproducts" />
    <br>
    
    <laptop-slider section="covermobile" />
    <br>
   
    
    <footer-section :href="id" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import NavBar from "../components/UI/header/NavBar.vue";
// import Carousel from "../components/UI/MainSection/SlideShow/Carousel.vue";
import CarouselSlider from "../components/UI/MainSection/SlideShow/CarouselSlider.vue";
import MultiCarousel from "../components/UI/MainSection/SlideShow/MultiItemCarousel.vue";
import Mobile from "../components/UI/MainSection/MobileSlider.vue";
import LaptopSlider from "../components/UI/MainSection/LaptopSlider.vue";
import TopMarket from "../components/UI/MainSection/TopMarket.vue";
import TopMobile from "../components/UI/MainSection/TopMobile.vue";
import TopYogurt from "../components/UI/MainSection/TopYogurt.vue";
import TopHandsfri from "../components/UI/MainSection/TopHandsfri.vue";
import TopBook from "../components/UI/MainSection/TopBook.vue";
import TopNew from "../components/UI/MainSection/TopNew.vue";
import FooterSection from "../components/UI/Footer/FooterSection.vue";
// import CarouselSlide from "../components/UI/MainSection/SlideShow/CarouselSlide.vue"
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    NavBar,
    CarouselSlider,
    MultiCarousel,
    Mobile,
    LaptopSlider,
    TopMarket,
    TopMobile,
    TopYogurt,
    TopHandsfri,
    TopBook,
    TopNew,
    FooterSection
  },
  setup() {

    const id = ref("#categories");
    return {
      id,
    };
  },
};
</script>
<style scoped>
.home {
  background-color: rgb(223, 229, 233) !important;
}
</style>
