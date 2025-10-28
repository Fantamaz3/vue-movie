<script setup>
import AppHeader from './components/AppHeader.vue'
import MovieList from './components/MovieList.vue'
MovieList
</script>

<template>
  <div class="app">
    <header class="header-container">
      <AppHeader />
    </header>
    <div class="container">
      <MovieList />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
}
</style>
