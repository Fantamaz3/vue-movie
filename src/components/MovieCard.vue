<script setup>
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w185'

defineProps({
  movie: Object,
})
</script>

<template>
  <div class="card-container">
    <div class="movie-title">
      <h3>{{ movie.title }}</h3>
    </div>
    <img class="card-img" :src="IMAGE_BASE + movie.poster_path" :alt="movie.title" />
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
}
.card-container {
  height: fit-content;
  width: 100%;
  max-width: 200px;
  /* margin-right: 20px; */
}

.movie-title {
  display: flex;
  align-items: end;
  margin-bottom: 15px;
  height: 45px;
  width: 100%;
}

.card-img {
  width: 200px;
  height: 300px;
}
</style>
