import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Donate from "../views/Donate.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/donate",
    name: "donate",
    component: Donate
  },
  {
    path: "/form",
    name: "form",
    component: Form
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
