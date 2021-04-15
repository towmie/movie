<template>
  <the-bg></the-bg>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
    <!-- <films-list></films-list> -->
  </div>
</template>

<script>
import TheBg from "./components/UI/TheBg";
import TheHeader from "./components/layout/TheHeader";
// import FilmsList from "./components/layout/FilmsList";

export default {
  components: { TheHeader, TheBg },

  watch: {
    $route(page) {
      const pageId = page.params.pageId;
      this.$store.dispatch("loadFilms", pageId);
    },
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  background-blend-mode: lighten;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
