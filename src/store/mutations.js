"use strict";

export default {
  loadFilms(state, { results }) {
    state.filmsList = results;
    // console.log(results[0]);
  },

  changeBG(state, payload) {
    state.currentBG = payload;
    // console.log(state.currentBG);
  },
};
