<template>
  <div class="container">
    <div class="row">
      <div class="col-3 bg-all bg-purple">
        <div class="cart">
          <img
            src="../../../../public/img/botomnhandsfree/7a.png"
            class="img-cart-top imgtop"
          />
          <div
            class="
              cart-body
              txt
              d-flex
              align-items-center
              justify-content-between
              w-75
            "
          >
            <h5>فروشنده شوید</h5>
            <div class="btn-txt px-4 bg-dark text-white">
              <small>مشاهده</small>
              <font-awesome-icon
                class="fs-4 p-1 text-info"
                :icon="['fa', 'chevron-left']"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 bg-all bg-blue">
        <div class="cart">
          <img
            src="../../../../public/img/botomnhandsfree/7b.png"
            class="img-cart-top imgtop"
          />
          <div
            class="
              cart-body
              txt
              d-flex
              align-items-center
              justify-content-between
              w-75
            "
          >
            <h5>محصولات بومی و محلی </h5>
            <div class="btn-txt px-4 bg-dark text-white">
              <small>مشاهده</small>
              <font-awesome-icon
                class="fs-4 p-1 text-info"
                :icon="['fa', 'chevron-left']"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 bg-all bg-blue">
        <div class="cart">
          <img
            src="../../../../public/img/botomnhandsfree/7c.png"
            class="img-cart-top imgtop"
          />
          <div
            class="
              cart-body
              txt
              d-flex
              align-items-center
              justify-content-between
              w-75
            "
          >
            <h5>قرعه کشی بهار دیجی کلاب</h5>
            <div class="btn-txt px-4 bg-dark text-white">
              <small>مشاهده</small>
              <font-awesome-icon
                class="fs-4 p-1 text-info"
                :icon="['fa', 'chevron-left']"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 bg-all bg-lightpurple">
        <div class="cart">
          <img
            src="../../../../public/img/botomnhandsfree/7a.png"
            class="img-cart-top imgtop"
          />
          <div
            class="
              cart-body
              txt
              d-flex
              align-items-center
              justify-content-between
              w-75
            "
          >
            <h5>هدیه ای از جنس انتخاب! </h5>
            <div class="btn-txt px-4 bg-dark text-white">
              <small>مشاهده</small>
              <font-awesome-icon
                class="fs-4 p-1 text-info"
                :icon="['fa', 'chevron-left']"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
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
  background: rgb(177, 225, 248);
}
.bg-lightpurple{
   background: rgb(226, 169, 217);
}

.bg-purple {
  background: rgb(245, 91, 245);
}
.imgtop {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 190px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.txt {
  position: absolute;
  bottom: 2px;
  right:30px;
  color:#000;
}
</style>
