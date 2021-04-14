"use strict";

export default {
  loadFilms(state, { results }) {
    state.filmsList = results;
    console.log(results[2]);
  },

  changeBG(state, payload) {
    state.currentBG = payload;
    // console.log(state.currentBG);
  },
};
