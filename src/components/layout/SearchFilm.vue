<template>
  <div>
    <input type="text" v-model="serchedFilm" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      serchedFilm: "",
    };
  },
  methods: {
    serchFilm() {
      //   let search = this.serchedFilm;
      //   setTimeout(function () {
      //     console.log(search);
      //   }, 1000);
      //   this.$store.dispatch
    },
  },
};
</script>

<style scoped></style>
