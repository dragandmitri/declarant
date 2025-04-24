import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Registration", component: Registration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
