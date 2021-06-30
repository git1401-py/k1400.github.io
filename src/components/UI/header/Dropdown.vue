<template>
  <div class="dropdown">
    <div
      class="dropdown-trigger"
      @click.prevent="isopen = !isopen"
      @mouseenter="isopen = true"
      @mouseleave="isopen = false"
      aria-haspopup="true"
      :aria-expanded="isopen"
    >
      <slot name="trigger"></slot>
    </div>
    <transition name="pop-out-quick">
      <div
        @mouseenter="isopen = true"
        @mouseleave="isopen = false"
        v-show="isopen"
        class="dropdown"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      isopen: false,
    };
  },
  watch: {
    isopen(isopen) {
      if (isopen) {
        document.addEventListener("click", this.closeIfClickedOutside);
      }
    },
  },
  methods: {
    closeIfClickedOutside(event) {
      if (!event.target.closest(".dropdown")) {
        this.isopen = false;
      }
    },
  },
  //   setup() {
  //     const isopen = ref(false);
  //     return {
  //       isopen,
  //     };
  //   },
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  z-index: 10;
}
.pop-out-quick-enter-active,
.pop-out-quick-leav-active {
  transition: all 0.4s;
}
.pop-out-quick-enter-from,
.pop-out-quick-leav-to {
  opacity: 0;
  transform: translateY(-7px);
}
</style>
