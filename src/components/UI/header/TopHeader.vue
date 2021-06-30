<template>
  <div class="row">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="fs-3 top-header">
          <span class="euro"> <b>euro</b>2020 </span>
          <span> جام پیش بینی یورو 2020 همراه با </span>
          <span class="cleareuro fs-1"> c</span>
          <span class="cleareuro">lear </span>
          <div class="btn-txt">
            <font-awesome-icon
              class="fs-6"
              :icon="['fa', 'chevron-left']"
            ></font-awesome-icon>
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

<style scoped>
.top-header {
  background-image: url("../../../../public/img/DGkala/1d.png");
  background-repeat: repeat-x;
  height: 60px;
  color: whitesmoke;
}

.euro {
  text-transform: uppercase;
  font-family: "Charmonman";
}
.cleareuro {
  text-transform: uppercase;
  font-family: "Molengo";
}
</style>
