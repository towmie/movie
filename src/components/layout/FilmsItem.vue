<template>
  <div>
    <li class="card" @mouseover="getBgImg">
      <img class="img" :src="getImgUrl" :alt="title" />
      <div class="info-box">
        <h2 class="title">{{ title }}</h2>
        <a href="#" class="info-btn">Show Info</a>
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
  },
  methods: {
    getBgImg() {
      this.$store.dispatch("changeBG", this.getImgUrl);
    },
  },
};
</script>

<style scoped>
.info-box {
  position: absolute;
  left: 50%;
  bottom: -200px;
  width: 100%;
  height: 200px;
  transform: translateX(-50%);

  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
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
.img {
  object-fit: cover;
  width: 100%;
}
</style>
