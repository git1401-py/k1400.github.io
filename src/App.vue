<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="//animation">/Animation</router-link>
  </div> -->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap");
// @import url('https://fonts.googleapis.com/css2?family=Markazi+Text&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Markazi+Text&family=Rajdhani:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Charmonman:wght@700&family=Molengo&display=swap");

// colors
$primary: #00adb5;
// $secondary: #f8b500;
$body-bg: #eef1f7;
$text-body: rgb(24, 19, 19);
$body-color: $text-body;
$border-radius: 8px;

//overrides

$font-family-brand: "Rajdhani", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
$font-family-base: "Markazi Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";

$headings-font-family: $font-family-brand;
$headings-font-weight: 400;
$line-height-headings: 1.4;

$base-font-family: $font-family-base;
$base-font-weight: 400;
$line-height-base: 1.4;

$list-group-active-bg: #222;
$list-group-bg: transparent;
$list-group-border-radius: 0;
$list-group-hover-bg: #444;
$list-group-action-color: #bbb;

@import "node_modules/bootstrap/scss/bootstrap";
.btn-txt {
  height: 20px;
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #000;
  border-top-left-radius: 500px;
  border-bottom-left-radius: 500px;
  cursor: pointer;
}
#app {
  font-family: $font-family-base;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
