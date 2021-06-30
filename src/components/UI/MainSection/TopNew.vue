<template>
  <div class="container">
    <div class="row">
      <div class="col-12 bg-all">
        <div class="txt d-flex flex-column">
          <span class="align-self-stretch">
           راحته خیال مادر
            <div class="btn-txt px-4 bg-dark text-white">
              خرید
              <font-awesome-icon class="fs-6 text-info" :icon="['fa', 'chevron-left']" ></font-awesome-icon>
            </div>
          </span>
        </div>
        <img
          src="../../../../public/img/DGkala/topnew.png"
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
  height: 100px;
  position: relative;
  z-index: 1;
  color: #000;
  text-align: right;
}
.txt {
  font-size: 16px;
  font-weight: 800;
  position: absolute;
  bottom: 45%;
  right: 20%;
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
