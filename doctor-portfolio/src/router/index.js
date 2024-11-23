import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Qualifications from '../views/Qualifications.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/qualifications', component: Qualifications },
  { path: '/contact', component: Contact },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});