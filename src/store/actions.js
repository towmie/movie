"use strict";

export default {
  async loadFilms(context) {
    const resp = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=964401a7366717c6e0b71563c80e8010&page=1"
    );
    const data = await resp.json();

    context.commit("loadFilms", data);
  },

  async findMovie(context, payload) {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=964401a7366717c6e0b71563c80e8010&query=${payload}&page=1`
    );
    const data = await resp.json();
    console.log(data);
    // context.commit("findMovie", data);
  },

  changeBG(context, payload) {
    context.commit("changeBG", payload);
  },
};
