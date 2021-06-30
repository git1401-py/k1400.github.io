\
<template>
  <!-- <ul class="dropdown-menu mega-dropdown-menu" aria-labelledby="everything"> -->
  <div class="container nav-position">
    <div class="row pt-3">
      <div class="col-4 p-0">
        <ul class="px-0 sugestion text-end">
          <li class="">
            <b> مشاهده همه تخفیف ها و پیشنهادها</b>
          </li>
          <li class="">
            <b>کالاهای شگفت انگیز </b>
          </li>
          <li class="">
            <b>شگفت انگیز سوپرمارکتی </b>
          </li>
          <li class="">
            <b>فروش ویژه </b>
          </li>
          <li class="">
            کالای دیجیتال
          </li>
          <li class="">
            خودرو،ابزار و تجهیزات صنعتی
          </li>
          <li class="">
            مد و پوشاک
          </li>
          <li class="">
            اسباب بازی، کودک و نوزاد
          </li>
          <li class="">
            کالاهای سوپرمارکتی
          </li>
          <li class="">
            زیبایی و سلامت
          </li>
          <li class="">
            خانه و آشپزخانه
          </li>
          <li class="">
            کتاب و لوازم تحریر و هنر
          </li>
          <li class="">
            ورزش و سفر
          </li>
         
          <li class="fs-6">ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا 30 روز پس از تحویل</li>
          <li class="border-bottom text-info">اطلاعات بیشتر و عضویت </li>
          <li style="list-style-type: disc;"> کالاهای <b style="color: rgb(119, 5, 100)">دیجی پلاس</b> </li>
        </ul>
      </div>
      <div class="col-3 p-0">
        <ul class="px-0 pt-4 native text-end">
          محصولات بومی و محلی
          <li class="">
            اسباب بازی کمتر از 99 هزار تومان
          </li>
          <li class="">
            حشره کش و سوسک کش تا 70 درصد تخفیف
            </li>
          </ul>
        <ul class="px-0 pt-4 sugestion text-end">
        
          <li class="border-top">
            پرفروش ترین کالاها
          </li>
          <li class="">
            با هر خرید هدیه بگیرید!
          </li>
          <li class="">
            تخفیف پایان فصل
          </li>
          <li class="">
            کارت هدیه خرید از دیجی کالا
          </li>
          <li class="">
            تازه های فروشنده های خرید
          </li>
          </ul>
      </div>
      <div class="col-5 position-relative">
        <img
          class="w-100 h-75"
          src="../../../../../public/img/DGkala/navSugestion.png"
          alt=""
        />
        <div class="imgtext w-100">
          <div class=""><span class="fs-1">گردونه شانس</span></div>
          <div class="d-flex justify-content-center align-items-center">
            <span class="fs-2"> ویژه خرید اولی ها </span>
            <button class="btn-light rounded-end rounded-circle border-0" style="height:25px;width:25px"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-position {
  position: absolute;
  top: 16px;
  right: -75px;
  width: 780px;
  height: 410px;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  /* border: 2px solid #eee; */
  z-index: 2;
}
.sugestion li {
  list-style: none;
  line-height: 30px;
}
.native li{
  list-style-type: disc;
  line-height: 30px;
  margin-right: 20px;

}
.nav-position img {
  /* width: 200px; */
}
.imgtext {
  text-align:center;
  color: white;
  position: absolute;
  top: 10px;
  right: 15px;
}
.dropdown-clip {
  overflow: hidden;
}

.dropdown-enter-active {
  transition: all 0.5s ease-in-out;
  transform: auto;
}

.dropdown-leave-active {
  transition: all 1s ease-in-out;
  transform: auto;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}
</style>
