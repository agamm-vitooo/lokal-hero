<template>
  <div class="flex flex-col items-center space-y-4 my-8">
    <!-- Page Info -->
    <div class="text-sm text-slate-500">
      Menampilkan halaman <span class="font-medium text-slate-700">{{ currentPage }}</span> dari <span class="font-medium text-slate-700">{{ totalPages }}</span>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-center space-x-2">
      <!-- First Page -->
      <button
        @click="goToPage(1)"
        :disabled="currentPage === 1"
        class="p-2 rounded-lg transition-all duration-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        :class="currentPage === 1 ? 'text-slate-400' : 'text-slate-600'"
        title="Halaman Pertama"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
        </svg>
      </button>

      <!-- Previous Page -->
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="group relative p-2 rounded-lg transition-all duration-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        :class="currentPage === 1 ? 'text-slate-400' : 'text-slate-600'"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <!-- Tooltip -->
        <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Sebelumnya
        </span>
      </button>

      <!-- Page Numbers -->
      <div class="flex items-center space-x-1">
  <template v-for="pageNumber in displayedPages">
    <!-- Ellipsis -->
    <span 
      v-if="pageNumber === '...'" 
      :key="'ellipsis-' + pageNumber"  
      class="px-2 py-1 text-slate-400"
    >
      ...
    </span>
    <!-- Page Button -->
    <button
      v-else
      @click="goToPage(pageNumber)"
      :key="'page-' + pageNumber" 
      class="min-w-[2.5rem] h-10 rounded-lg transition-all duration-200 font-medium text-sm"
      :class="currentPage === pageNumber 
        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700' 
        : 'text-slate-600 hover:bg-slate-100'"
    >
      {{ pageNumber }}
    </button>
  </template>
</div>

      <!-- Next Page -->
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="group relative p-2 rounded-lg transition-all duration-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        :class="currentPage === totalPages ? 'text-slate-400' : 'text-slate-600'"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
        <!-- Tooltip -->
        <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Selanjutnya
        </span>
      </button>

      <!-- Last Page -->
      <button
        @click="goToPage(totalPages)"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-lg transition-all duration-200 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        :class="currentPage === totalPages ? 'text-slate-400' : 'text-slate-600'"
        title="Halaman Terakhir"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden flex items-center space-x-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Sebelumnya
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Selanjutnya
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  computed: {
    displayedPages() {
      const pages = [];
      const maxVisiblePages = 5;

      if (this.totalPages <= maxVisiblePages) {
        // Show all pages if total is less than max visible
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        // Calculate middle pages
        let startPage = Math.max(2, this.currentPage - 1);
        let endPage = Math.min(this.totalPages - 1, this.currentPage + 1);

        // Add ellipsis if needed before middle pages
        if (startPage > 2) {
          pages.push('...');
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }

        // Add ellipsis if needed after middle pages
        if (endPage < this.totalPages - 1) {
          pages.push('...');
        }

        // Always show last page
        pages.push(this.totalPages);
      }

      return pages;
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },
    goToPage(page) {
      if (typeof page === 'number' && page !== this.currentPage) {
        this.$emit('update:currentPage', page);
      }
    }
  }
};
</script>
