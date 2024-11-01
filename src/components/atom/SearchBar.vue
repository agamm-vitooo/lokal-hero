<template>
  <form @submit.prevent="onSearch" class="flex flex-col sm:flex-row gap-4">
    <div class="relative flex-grow">
      <input
        type="text"
        v-model="query"
        placeholder="Cari nama pahlawan atau kata kunci..."
        class="block w-full pl-10 pr-3 text-black py-3 bg-slate-100 border border-slate-200 rounded-lg"
      />
    </div>
    <button
      type="submit"
      class="bg-indigo-600 text-white rounded-lg px-6 py-3"
    >
      Cari Pahlawan
    </button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    initialQuery: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      query: this.initialQuery,
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.query); // Emit search query to parent component
    },
  },
};
</script>
