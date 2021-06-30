<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-all">
        <div class="txt d-flex flex-column">
          <span class="align-self-stretch"> راحت تن... </span>
          <span class="align-self-stretch">
            توی خونه هم رو مد بپوش
            <div class="btn-txt px-4 bg-dark text-white">
              خرید
              <font-awesome-icon class="fs-6 text-info" :icon="['fa', 'chevron-left']" ></font-awesome-icon>
            </div>
          </span>
        </div>
        <img
          src="../../../../public/img/topmobile/5a.png"
          class="img imgleft "
        />
      </div>
      <div class="col-6 bg-all">
        <div class="txt d-flex flex-column">
          <span class="align-self-stretch">  پرفروش ترین های </span>
          <span class="align-self-stretch">
           دیجی کالا
            <div class="btn-txt px-4 bg-dark text-white">
              خرید
              <font-awesome-icon class="fs-6 text-info" :icon="['fa', 'chevron-left']" ></font-awesome-icon>
            </div>
          </span>
        </div>
        <img
          src="../../../../public/img/topmobile/5b.png"
          class="img imgleft "
        />
      </div>
      
      
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: { FontAwesomeIcon },
};
</script>

<style lang="scss" scoped>
.bg-all {
  width: 47%;
  height: 230px;
  margin: 0 1%;
  position: relative;
  z-index: 1;
  color: #000;
  text-align: right;
}
.txt {
  font-size: 16px;
  font-weight: 800;
  position: absolute;
  bottom: 50px;
  right: 40px;
  z-index: 3;
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
.imgleft {
 
}
</style>
