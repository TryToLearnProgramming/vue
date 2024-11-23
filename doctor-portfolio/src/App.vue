<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
    <!-- Hero Section -->
    <header class="bg-white shadow-lg">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-green-800">Dr. Ayurveda</h1>
        <div class="space-x-6">
          <a href="#about" class="text-gray-600 hover:text-green-800 transition-colors">About</a>
          <a href="#services" class="text-gray-600 hover:text-green-800 transition-colors">Services</a>
          <a href="#contact" class="text-gray-600 hover:text-green-800 transition-colors">Contact</a>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-16 flex items-center">
      <div class="w-1/2 fade-in">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Holistic Healing</h2>
        <p class="text-xl text-gray-600 mb-8">Experience the ancient wisdom of Ayurveda with modern expertise</p>
        <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
          Book Consultation
        </button>
      </div>
      <div class="w-1/2 slide-in-right">
        <div class="rounded-full overflow-hidden w-96 h-96 mx-auto">
          <!-- Replace with your actual image -->
          <img 
            
            src ="./images/doctor.jpg"
            alt="Doctor's Profile" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="bg-white py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" 
               class="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-up">
            <img v-if="service.image" :src="service.image" :alt="service.title" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-green-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div class="grid grid-cols-2 gap-12">
          <div class="fade-in">
            <h3 class="text-xl font-bold mb-4">Clinic Location</h3>
            <p class="text-gray-600 mb-4">123 Healing Street</p>
            <p class="text-gray-600 mb-4">Wellness City, WC 12345</p>
            <p class="text-gray-600 mb-4">Phone: (123) 456-7890</p>
            <p class="text-gray-600">Email: dr@ayurveda.com</p>
          </div>
          <div class="slide-in-right">
            <form class="space-y-4">
              <input type="text" placeholder="Name" class="w-full p-2 rounded border">
              <input type="email" placeholder="Email" class="w-full p-2 rounded border">
              <textarea placeholder="Message" class="w-full p-2 rounded border h-32"></textarea>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      services: [
        {
          title: 'Ayurvedic Consultation',
          description: 'Personalized health assessment and treatment plans based on your unique constitution.',
          image: 'src/images/ayurveda.jpg'
        },
        {
          title: 'Panchakarma Therapy',
          description: 'Traditional detoxification and rejuvenation treatments.',
          image: 'src/images/panchakarma.jpg'
        },
        {
          title: 'Herbal Medicine',
          description: 'Custom herbal formulations for various health conditions.',
          image: 'src/images/herbal.jpg'
        }
      ]
    }
  }
}
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up {
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s ease-out;
}

.slide-up.visible {
  transform: translateY(0);
  opacity: 1;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

.slide-in-right {
  animation: slideInRight 1s ease-out;
}

.fade-up {
  animation: fadeUp 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
