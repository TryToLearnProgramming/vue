
<template>
  <section class="container mx-auto px-4 pt-20 pb-12">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="fade-in">
        <img src="https://images.unsplash.com/photo-1637059824899-a441006a6875" alt="Doctor Profile" 
             class="rounded-full w-64 h-64 object-cover mx-auto shadow-lg">
      </div>
      <div ref="slideUpRef" class="slide-up">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Dr. Ayurveda</h1>
        <p class="text-xl text-gray-600 mb-2">Registered Ayurvedic Practitioner</p>
        <p class="text-gray-500 mb-4">Reg. No: AYUR12345</p>
        <div class="flex gap-4">
          <router-link to="/contact" class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
            Book Consultation
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '../composables/useIntersectionObserver';

const slideUpRef = ref(null);

onMounted(() => {
  useIntersectionObserver(slideUpRef.value);
});
</script>