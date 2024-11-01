<template>
  <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-3xl font-bold text-slate-900 mb-2">
        Pahlawan Nasional Indonesia
      </h1>
      <p class="text-slate-600">
        Temukan informasi tentang para pejuang kemerdekaan Indonesia
      </p>
    </div>
    <div class="max-w-7xl mx-auto mb-8">
      <!-- Panggil SearchBar -->
      <SearchBar :initialQuery="searchQuery" @search="handleSearch" />
    </div>
    <div class="max-w-7xl mx-auto">
      <div v-if="loading" class="text-center py-12">
        <p class="text-slate-600">Mencari data...</p>
      </div>
      <div v-else-if="errorMessage" class="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
        <p class="text-red-700">{{ errorMessage }}</p>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="hero in displayedHeroes" :key="hero.id" class="bg-white rounded-xl shadow-sm p-6">
          <h2 class="text-xl font-semibold text-slate-900">{{ hero.name }}</h2>
          <div class="text-sm text-slate-600">
            <p>{{ hero.birthYear }} - {{ hero.deathYear }}</p>
            <p>{{ hero.birthPlace }}</p>
            <p>{{ hero.description }}</p>
          </div>
        </div>
      </div>

      <!-- Panggil Pagination di sini -->
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @update:currentPage="updateCurrentPage"
        class="mt-8 flex justify-center"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
import SearchBar from '../atom/SearchBar.vue';

export default {
  components: {
    Pagination,
    SearchBar,
  },
  data() {
    return {
      searchQuery: '', // Query pencarian
      heroes: [],
      filteredHeroes: [], // Filtered data
      errorMessage: '',
      currentPage: 1,
      itemsPerPage: 12,
      loading: false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredHeroes.length / this.itemsPerPage);
    },
    displayedHeroes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredHeroes.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async searchHeroes() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.get(`http://localhost:3000/api/heroes`);
        this.heroes = response.data;
        this.filterHeroes();
        this.currentPage = 1;
      } catch (error) {
        this.errorMessage = 'Maaf, data tidak ditemukan atau terjadi kesalahan koneksi.';
        this.heroes = [];
        this.filteredHeroes = [];
      } finally {
        this.loading = false;
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.filterHeroes();
    },
    filterHeroes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredHeroes = this.heroes.filter(hero => {
        return (
          hero.name.toLowerCase().includes(query) ||
          hero.birthPlace.toLowerCase().includes(query) ||
          String(hero.birthYear).includes(query) ||
          String(hero.deathYear).includes(query)
        );
      });
    },
    updateCurrentPage(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    this.searchHeroes();
  }
};
</script>


<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
