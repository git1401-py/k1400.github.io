\<template>
  <!-- <ul class="dropdown-menu mega-dropdown-menu" aria-labelledby="everything"> -->
  <div class="container nav-position">
    <div class="row pt-3">
      <div class="col-4">
        <div class="dgbrand fs-2 text-end">
          <b >digi</b>
          <span class="text-info fs-3" >club</span>
        </div>
        <ul class=" px-0 text-end">
          <li class="">صفحه اصلی دیجی کلاب</li>
          <li class="">جوایز دیجی کلاب</li>
          <li class="disabled text-muted">تاریخچه امتیازات دیجی کلاب</li>
          <li class="border-bottom">ماموریت های دیجی کلابی</li>
          <li class="">قرعه کشی</li>
        </ul>
      </div>
      <div class="col-8 position-relative">
        <img class="w-100 rounded-3" src="../../../../../public/img/DGkala/navDgclub.png" alt="">
        <div class="imgtext">
          <div class="dgbrand fs-1 text-white">
            <bold >digi</bold>
            <span >club</span>
          </div>
          <div><span class="text-white">   باشکاه مشتریلن دیجی کالا!!</span></div>
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
  right: -420px;
  width: 620px;
  height: 225px;
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
.dgbrand {
  font-family: "Rajdhani";
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
