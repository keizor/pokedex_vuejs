import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PokemonList from "../views/PokemonList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Pokemon List",
    component: PokemonList
  },
  {
    path: "/:id",
    name: "Pokemon Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonDetails.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
