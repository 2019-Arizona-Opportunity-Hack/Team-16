import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Donate from "../views/Donate.vue";
import Help from "../views/Help.vue";
import ThankYou from '../views/ThankYou'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/form",
    name: "form",
    component: Form
  },
  {
    path: "/donate",
    name: "donate",
    component: Donate
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: ThankYou
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
