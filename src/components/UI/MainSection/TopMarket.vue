<template>
  <div class="container">
    <div class="row">
      <div class="col-3 bg-all bg-blue">
        <div class="zhel d-flex flex-column">
          <span class="align-self-stretch"> ظاهر تازه </span>
          <span class="align-self-stretch"> همان طعم </span>
          <span class="align-self-stretch">
            خوشمزه
            <div class="btn-txt">
              <font-awesome-icon class="fs-5" :icon="['fa', 'chevron-left']" />
            </div>
          </span>
        </div>
        <img
          src="../../../../public/img/topmarket/3a1.png"
          class="img imgleft"
        />
        <img
          src="../../../../public/img/topmarket/3a2.png"
          class="img imgright"
        />
      </div>
      <div class="col-3 bg-all bg-middleblue">
        <span class="pril fs-2 d-flex align-items-center" style="color:yellow;"
          >pindo
          
            <div class="shape"> . . ــــ</div>
        </span>
        <div class="zhel d-flex flex-column">
          <span class="align-self-stretch">خرید و فروش </span>
          <span class="align-self-stretch"> انواع کالاها </span>
          <span class="align-self-stretch">
            <small>دسته دوم</small>
            <div class="btn-txt">
              <font-awesome-icon class="fs-5" :icon="['fa', 'chevron-left']" />
            </div>
          </span>
        </div>
        <img
          src="../../../../public/img/topmarket/3b.png"
          class="img imgleft"
        />
      </div>
      <div class="col-3 bg-all bg-purple p-0">
        <div class="bg-danger clippath"></div>
        <span class="pril">پریل</span>
        <div class="zhel d-flex flex-column">
          <span class="align-self-stretch">ژل مـاشـیـن </span>
          <span class="align-self-stretch">
            ظرفشویی
            <div class="btn-txt">
              <font-awesome-icon class="fs-5" :icon="['fa', 'chevron-left']" />
            </div>
          </span>
        </div>
      </div>
      <div class="col-3 bg-all bg-lightblue">
        <img
          src="../../../../public/img/topmarket/3d.png"
          class="img imgmiddle"
        />
          <span class="yoga">روز جهانی یوگا| برای یوگی ها  </span>
        
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
  width: 23%;
  height: 230px;
  margin: 0 1%;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  color: white;
  text-align: right;
}
.bg-blue {
  background: rgb(12, 77, 107);
}
.bg-lightblue {
  background: rgb(10, 214, 250);
}
.bg-middleblue {
  background: rgb(5, 160, 187);
  z-index:2;
}

.bg-purple {
  background: purple;
}
.clippath {
  padding: 0;
  position: relative;
  z-index: 2;
  border-radius: 15px;
  height: 100vh;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 60px, 0 150px);
}
.pril {
  font-size: 60px;
  font-weight: 800;
  position: absolute;
  top: 0px;
  right: 10px;
  z-index: 3;
}
.zhel {
  width: 150px;
  position: absolute;
  bottom: 50px;
  right: 10px;
}
.yoga{
  position: absolute;
  z-index: 3;
  bottom:20px;
  right:70px;
  color:#000;
}
.img {
  position: absolute;
}
.imgleft {
  left: 40px;
  top: 60px;
}
.imgright {
}
.imgmiddle {
  bottom: 10px;
  right:40px;
}
.shape{
  line-height:3px; 
  width:25px;
  height:25px;
  border-bottom-right-radius: 90%;
  border-bottom-left-radius: 90%;
  background: yellow;
  font-size: 19px;
  color:#000;
  padding:6px;
}
</style>
