<script setup>
import { useBlogStore } from "../stores/blog";
const store = useBlogStore();
</script>

<template>
  <nav
    class="bg-black text-white p-2 flex items-center fixed top-0 right-0 left-0 z-10"
  >
    <div class="nab-heading text-2xl mx-2">
      <RouterLink :to="{ name: 'home' }"> BLOGAPP</RouterLink>
    </div>
    <div class="nav-content float-end w-full">
      <ul class="nav-list flex space-x-4 mx-2 font-semibold justify-end">
        <li class="nav-link hover:text-red-600">
          <button @click="store.createPostShow = true">Add New Post</button>
        </li>

        <li class="nav-link hover:text-red-600">About</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
