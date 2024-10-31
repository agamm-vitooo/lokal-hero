<template>
  <nav class="flex justify-center items-center mt-4 space-x-4">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50 hover:bg-blue-700 transition"
    >
      &laquo; Sebelumnya
    </button>

    <span class="text-sm text-gray-700">
      Halaman {{ currentPage }} dari {{ totalPages }}
    </span>

    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50 hover:bg-blue-700 transition"
    >
      Selanjutnya &raquo;
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
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
  },
};
</script>

<style scoped>
/* Tambahan gaya jika diperlukan */
</style>
