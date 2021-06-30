\<template>
  <!-- <ul class="dropdown-menu mega-dropdown-menu" aria-labelledby="everything"> -->
  <div class="container nav-position">
    <div class="row pt-3">
      <div class="col-4">
        <ul class=" px-0 text-end">
          <li class="">فعال سازی کیف پول</li>
          <li class="">صفحه اصلی دیجی پی</li>
          <li class="">خرید شارژ</li>
          <li class="">خرید بسته اینترنت</li>
          <li class="">پرداخت فبض</li>
        </ul>
      </div>
      <div class="col-8 position-relative">
        <img src="../../../../../public/img/DGkala/navDgpi.png" alt="">
        <div class="imgtext">
          <div>با<span class="fs-2">دیجی پی</span></div>
          <div><span>خرید شارژ،بسته اینترننت و ...</span></div>
          <div><span class="text-muted">سریع تر از همیشه!!</span></div>
        </div>
      </div>
    </div>
    
  </div>
 
</template>

<script>
export default {  };
</script>

<style scoped>
.nav-position {

  position: absolute;
  top: 16px;
  right: -400px;
  width: 550px;
  height: 190px;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;;
  /* border: 2px solid #eee; */
  z-index:2;
}
.nav-position ul li{
  list-style: none;
  line-height: 30px;
}
.nav-position img{
  /* width: 200px; */
}
.imgtext{
  text-align: start;
  color:white;
  position: absolute;
  top:40px;
  right:30px;
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
