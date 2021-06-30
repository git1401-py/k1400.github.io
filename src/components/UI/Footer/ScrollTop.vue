<template>
  <div>
    <a :href="href" class="btn btn-outline-secondary p-3 px-5" @click.prevent="scroll"
      >برگشت به بالا</a
    >
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ["href"],
  setup(props) {
    const scroll = () => {
      document.querySelector(props.href).scrollIntoView({ behavior: "smooth" });
    };
    return {
      props,
      scroll,
    };
  },
};
</script>
