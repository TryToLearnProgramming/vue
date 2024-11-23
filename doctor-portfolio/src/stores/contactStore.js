
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useContactStore = defineStore('contact', () => {
  const formData = ref({
    name: '',
    email: '',
    message: '',
  });

  const submitForm = async () => {
    // Implement form submission logic
    alert('Thank you for your message. We will get back to you soon!');
    formData.value = { name: '', email: '', message: '' };
  };

  return { formData, submitForm };
});