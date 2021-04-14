<template>
  <div>
    <ul class="list">
      <films-item
        v-for="film in filmsList"
        :key="film.id"
        :id="film.id"
        :img-url="film.poster_path"
        :title="film.title"
        :rating="film.vote_average"
        :description="film.overview"
      >
        {{ film.original_title }}
      </films-item>
    </ul>
  </div>
</template>

<script>
import FilmsItem from "./FilmsItem";
export default {
  components: { FilmsItem },
  computed: {
    filmsList() {
      return this.$store.getters.getFilmsList;
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
