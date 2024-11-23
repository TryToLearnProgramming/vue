
<template>
  <div class="fixed top-0 w-full bg-white shadow-md z-50 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-gray-800">Dr. Ayurveda</router-link>
      <div class="flex gap-4">
        <a href="tel:+1234567890" class="text-gray-600 hover:text-green-600 transition-colors">
          <i class="bi bi-telephone-fill"></i>
        </a>
        <a href="mailto:doctor@example.com" class="text-gray-600 hover:text-green-600 transition-colors">
          <i class="bi bi-envelope-fill"></i>
        </a>
        <a href="https://wa.me/1234567890" class="text-gray-600 hover:text-green-600 transition-colors">
          <i class="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  </div>
</template>