<template>
 <div>
      <div class="row" v-if="movies.length>0">
        <movie :movie="movie" v-for="movie in movies" :key="movie.id" />
      </div>
        <div class="alert alert-danger" v-else>No hay peliculas</div>
 </div>
</template>

<script>
import Movie from "./MovieItem";
import { mapGetters } from "vuex";
export default {
  components: {
    Movie
  },
  computed: {
    ...mapGetters({
      movies: "filteredMovies"
    })
  }
};
</script>

<style>
</style>