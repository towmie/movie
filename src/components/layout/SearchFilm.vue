<template>
  <div>
    <input
      type="text"
      v-model.lazy="serchedValue"
      placeholder="Search"
      debounce="500"
    />
    <button></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serchedValue: "",
    };
  },
  watch: {
    serchedValue: "serchFilm",
  },
  methods: {
    serchFilm(val) {
      this.$store.dispatch("findMovie", val);
    },
  },
};
</script>

<style scoped>
input {
  min-width: 200px;
  padding: 10px 30px 10px 15px;
  font-size: 17px;
  font-family: inherit;
  border-radius: 5px;
  background-color: #fff;
  border: none;
}
button {
  position: relative;
  top: 3px;
  cursor: pointer;
  background-color: transparent;
  margin-left: -30px;
  border: none;
  width: 20px;
  height: 20px;
  background-image: url(./../../assets/search.svg);
}
</style>
