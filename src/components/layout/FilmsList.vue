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
    <pagination
      v-model="page"
      :records="500"
      :per-page="20"
      @paginate="myCallback"
    />
  </div>
</template>

<script>
import FilmsItem from "./FilmsItem";
export default {
  components: { FilmsItem },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    filmsList() {
      return this.$store.getters.getFilmsList;
    },
  },
  methods: {
    myCallback(page) {
      this.$router.push(`/${page}`);
      const pageId = this.$route.params.pageId;
      this.$store.dispatch("loadFilms", pageId);
    },
  },
};
</script>

<style scoped>
.pag {
  display: flex;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
