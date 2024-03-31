import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "./views/Home.vue";

import BlogSingle from "./views/BlogSingle.vue";
import AddNewPost from "./views/AddNewPost.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "blog/:id",
        name: "blogSingle",
        component: BlogSingle,
      },
      {
        path: "/addnewpost",
        name: "addnewpost",
        component: AddNewPost,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
