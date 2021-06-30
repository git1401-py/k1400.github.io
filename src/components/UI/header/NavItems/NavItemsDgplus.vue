\
<template>
  <!-- <ul class="dropdown-menu mega-dropdown-menu" aria-labelledby="everything"> -->
  <div class="container nav-position">
    <div class="row pt-3">
      <div class="col-5">
        <ul class="px-0 text-end">
          <li class="">
            <b>خدمات ویژه کاربران </b
            ><b style="color: rgb(119, 5, 100)">دیجی پلاس</b>
          </li>
          <li class="fs-6">ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا 30 روز پس از تحویل</li>
          <li class="border-bottom text-info">اطلاعات بیشتر و عضویت </li>
          <li style="list-style-type: disc;"> کالاهای <b style="color: rgb(119, 5, 100)">دیجی پلاس</b> </li>
        </ul>
      </div>
      <div class="col-7 position-relative">
        <img
          class="w-100 h-100"
          src="../../../../../public/img/DGkala/navDgplus.png"
          alt=""
        />
        <div class="imgtext">
          <div><span class="fs-1">دیجی پلاس</span></div>
          <div><span>30 روز ضمانت بازگشت کالا،</span></div>
          <div><span>هدیه نقدی بر روی کالاها</span></div>
          <div><span>و ارسال رایگان</span></div>
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
  right: -330px;
  width: 580px;
  height: 210px;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  /* border: 2px solid #eee; */
  z-index: 2;
}
.nav-position ul li {
  list-style: none;
  line-height: 30px;
}
.nav-position img {
  /* width: 200px; */
}
.imgtext {
  text-align: start;
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
