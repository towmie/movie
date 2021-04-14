<template>
  <header class="header">
    <router-link to="/" class="title">Home</router-link>
    <search-film></search-film>
  </header>
</template>

<script>
import SearchFilm from "./SearchFilm.vue";
export default {
  components: { SearchFilm },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 0;
}
h2 {
  display: block;
}
</style>
