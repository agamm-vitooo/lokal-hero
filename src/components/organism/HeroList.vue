<template>
  <div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-3xl font-bold text-slate-900 mb-2">
        Pahlawan Nasional Indonesia
      </h1>
      <p class="text-slate-600">
        Temukan informasi tentang para pejuang kemerdekaan Indonesia
      </p>
    </div>

    <!-- Search Section -->
    <div class="max-w-7xl mx-auto mb-8">
      <form @submit.prevent="searchHeroes" class="flex flex-col sm:flex-row gap-4">
        <div class="relative flex-grow">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg 
              class="h-5 w-5 text-slate-400"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Cari nama pahlawan atau kata kunci..."
            class="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-sm text-slate-900 placeholder-slate-400"
          />
        </div>
        <button 
          type="submit" 
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 sm:w-auto"
        >
          Cari Pahlawan
        </button>
      </form>
    </div>

    <!-- Results Section -->
    <div class="max-w-7xl mx-auto">
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-indigo-600"></div>
        <p class="mt-2 text-slate-600">Mencari data...</p>
      </div>

      <!-- Error Message -->
      <div 
        v-else-if="errorMessage" 
        class="bg-red-50 border-l-4 border-red-400 p-4 mb-8"
      >
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-red-700">{{ errorMessage }}</p>
          </div>
        </div>
      </div>

      <!-- Heroes Grid -->
      <div 
        v-else 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="hero in displayedHeroes"
          :key="hero.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-slate-100"
        >
          <div class="p-6">
            <h2 class="text-xl font-semibold text-slate-900 mb-4">{{ hero.name }}</h2>
            <div class="space-y-2 text-sm text-slate-600">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>{{ hero.birthYear }} - {{ hero.deathYear }}</span>
              </div>
              <p class="mt-2 text-slate-600 line-clamp-3">{{ hero.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-8">
        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @update:currentPage="updateCurrentPage"
          class="flex justify-center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      searchQuery: '',
      heroes: [],
      errorMessage: '',
      currentPage: 1,
      itemsPerPage: 12,
      loading: false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.heroes.length / this.itemsPerPage);
    },
    displayedHeroes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.heroes.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async searchHeroes() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.get(`/api/heroes?q=${this.searchQuery}`);
        this.heroes = response.data;
        this.currentPage = 1;
      } catch (error) {
        this.errorMessage = 'Maaf, data tidak ditemukan atau terjadi kesalahan koneksi.';
        this.heroes = [];
      } finally {
        this.loading = false;
      }
    },
    updateCurrentPage(page) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
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