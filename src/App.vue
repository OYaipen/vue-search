<template>
  <div id="app">
    <div class="container">
      <movies-app />
      <movie-list />
    </div>
  </div>
</template>

<script>
import MoviesApp from "./components/MoviesApp";
import MovieList from "./components/MovieList";

export default {
  name: "app",
  components: {
    MoviesApp,
    MovieList
  }
};
</script>

<style>
</style>
