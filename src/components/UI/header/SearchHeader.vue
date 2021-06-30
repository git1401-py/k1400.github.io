<template>
  <div class="row align-items-center mb-3">
    <div class="col-7">
      <div class="row align-items-center py-2">
        <form class="d-flex align-items-center">
          <router-link
            class="text-danger text-decoration-none fs-1 w-auto px-3 dgbrand"
            to="/"
            >digikala</router-link
          >
          <div class="w-100">
            <div class="form-group">
              <input
                type="text"
                class="form-control text-secondary p-3"
                placeholder="جستجو در دیجی کالا..."
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-5 ps-3">
      <div class="row">
        <div
          class="
            col-11
            d-flex
            justify-content-end
            border-start
            rounded-start
            border-secondary
          "
        >
          <button class="btn btn-outline-secondary px-2 py-2 ms-2">
            ورود به حساب کاربری
          </button>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-control {
  background-color: rgb(223, 229, 233) !important;
}
.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(192, 187, 187);
  opacity: 1; /* Firefox */
}

.form-control:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(192, 187, 187);
}

.form-control::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(192, 187, 187);
}
.dgbrand {
  font-family: "Rajdhani";
}
</style>
