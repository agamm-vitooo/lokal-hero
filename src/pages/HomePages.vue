<template>
  <div>
    <HeroSection />
    <HeroList/>
    <!-- Komponen lain bisa ditambahkan di sini -->
  </div>
</template>

<script>
// Import komponen HeroSection
import HeroList from '../components/organism/HeroList.vue';
import HeroSection from '../components/organism/HeroSection.vue'; // Sesuaikan dengan path komponen Anda

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    HeroList
},
};
</script>

<style scoped>
/* Tambahan gaya jika diperlukan */
</style>
