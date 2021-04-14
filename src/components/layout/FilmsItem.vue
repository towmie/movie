<template>
  <div>
    <li class="card">
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
  methods: {},
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
  padding: 5px 25px;
  background-color: red;
  color: #fff;
  font-weight: 100;
  font-size: 19px;
}
.card {
  max-width: 300px;
  height: 400px;
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
