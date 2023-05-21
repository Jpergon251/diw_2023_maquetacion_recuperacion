import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Teams from "../pages/Teams.vue";
import NotFound from "../pages/NotFound.vue";
import Matches from "../pages/Matches.vue";


import Players from "../components/Players.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: '/teams/:team',
    name: 'Players',
    component: Players,
    props: true // Asegúrate de agregar esta línea para pasar props desde la ruta
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches,
  },
  // Ruta para capturar páginas no encontradas (404)
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;