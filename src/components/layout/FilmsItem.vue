<template>
  <div>
    <li class="card" @mouseover="getBgImg">
      <p class="rating">
        <span>{{ rating }}</span>
      </p>
      <img class="img" :src="getImgUrl" :alt="title" />
      <div class="info-box">
        <h2 class="title">{{ title }}</h2>
        <router-link :to="dialogUrl" class="info-btn" @click="showData"
          >Show Info</router-link
        >
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "imgUrl", "rating", "description"],

  computed: {
    getImgUrl() {
      return "https://image.tmdb.org/t/p/w500" + this.imgUrl;
    },
    dialogUrl() {
      return "/" + this.id;
    },
  },
  methods: {
    getBgImg() {
      this.$store.dispatch("changeBG", this.getImgUrl);
    },
    showData() {
      const seleCtedFilm = this.$store.getters.getFilmsList.filter(
        (movie) => movie.id === this.id
      )[0];
      console.log(seleCtedFilm);
    },
  },
};
</script>

<style scoped>
.rating {
  position: absolute;
  z-index: 10;
  margin: 0;
  top: 15px;
  right: 20px;
  width: 45px;
  height: 45px;

  font-weight: 700;
  text-align: center;
  font-size: 23px;
  color: #fff;

  background-color: red;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s;
}
.rating span {
  position: relative;
  top: 10px;
}

.info-box {
  position: absolute;
  left: 50%;
  bottom: -200px;
  width: 100%;
  height: 200px;
  transform: translateX(-50%);

  text-align: center;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.43, 0.99);
}

.title {
  display: block;
  padding: 15px 10px;

  text-transform: uppercase;
  font-size: 19px;
  font-weight: 300;
  color: #fff;
}
.info-btn {
  display: block;
  margin: 0 auto;
  width: 80%;
  padding: 8px 0px;
  background-color: red;
  color: #fff;
  font-weight: 100;
  font-size: 19px;
}
.card {
  max-width: 250px;
  height: 350px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.17, 0.67, 0.43, 0.99);
  position: relative;
}
.card:hover .info-box {
  bottom: -75px;
}
.card:hover .rating {
  opacity: 1;
}
.img {
  object-fit: cover;
  width: 100%;
}
.card:hover .img {
  transition: all 0.3s ease-in;
  transform: scale(1.03);
}
.card:hover {
  background-color: #000;
}
</style>
