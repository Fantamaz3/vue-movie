<script setup>
import { getMovies } from './api/tmdb'

getMovies().then((data) => {
  if (!data) return
  console.log('data:', data)
  console.log('Results:', data.results)
})
</script>

<template>
  <div class="app"></div>
</template>

<style scoped></style>
