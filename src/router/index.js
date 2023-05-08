import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Teams from "@/pages/Teams.vue";
import Matches from "@/pages/Matches.vue";
import Statistics from "@/pages/Statistics.vue";

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
    path: "/matches",
    name: "Matches",
    component: Matches,
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;