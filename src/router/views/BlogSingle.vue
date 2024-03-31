<script setup>
import { ref } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

import { useBlogStore } from "../../stores/blog";
const store = useBlogStore();

const tempId = ref(`${route.params.id}`);
console.log(tempId.value);

const getPost = () => {
  if (tempId.value) {
    return store.posts.filter((post) => {
      if (post.id == tempId.value) {
        return post;
      }
    });
  }
};
console.log(getPost());
</script>

<template>
  <div v-for="blog in getPost()" :key="blog.title" class="">
    <div class="blog-details flex flex-col md:flex-row p-3 my-5">
      <div class="blog-image w-1/3 px-2">
        <img
          src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
          alt="City"
          class="w-full rounded object-cover object-center"
        />
      </div>
      <div class="blog-text w-2/3 px-3 border-2 rounded">
        <h3
          class="title text-2xl font-bold mb-3 border-b-2 border-b-stone-300 p-2 "
        >
          {{ blog.title }}
        </h3>
        <p class="body px-2 font-medium">{{ blog.body }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
