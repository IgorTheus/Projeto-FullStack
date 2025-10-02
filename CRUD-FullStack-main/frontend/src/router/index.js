import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Maquina from "../views/Maquinas.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/maquinas", name: "maquina", component: Maquina }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

