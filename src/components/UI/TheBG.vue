<template>
  <div class="bg" :style="newStyle"></div>
</template>

<script>
export default {
  data() {
    return {
      defaultBG:
        "background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);;",
    };
  },
  computed: {
    newStyle() {
      return { "background-image": this.newBg };
    },
    newBg() {
      const poster = this.$store.getters.getBgImg;
      return poster ? `url(${poster})` : this.defaultBG;
    },
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in;
  filter: blur(10px);
}

.bg::after {
  content: "";
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  opacity: 0.7;
}
</style>
