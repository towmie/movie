"use strict";

export default {
  loadFilms(state, { results }) {
    state.filmsList = results;
    console.log(results[0]);
  },
};
