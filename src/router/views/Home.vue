<script setup>
import Blogcard from "../../components/reuseable/Blogcard.vue";
import AddBlog from "../../components/AddBlog.vue";
import EditBlog from "../../components/EditBlog.vue";
import { useBlogStore } from "../../stores/blog";

const store = useBlogStore();
</script>

<template>
  <div class="createPost w-full text-center">
    <button
      @click="store.createPostShow = true"
      class="px-10 py-2 bg-stone-500 hover:bg-stone-600 text-white rounded-2xl font-semibold"
    >
      What's on your mind?
    </button>
  </div>
  <p v-if="store.posts.length == 0" class="loadText text-center mt-20">
    You haven't added anything yet 😊
  </p>
  <div class="grid grid-cols-3 items-center justify-between">
    <Blogcard v-for="blog in store.getPosts()" :key="blog.id" :blog="blog" />
  </div>
  <AddBlog v-if="store.createPostShow" />
  <EditBlog v-if="store.editPostShow" :editing="store.currentlyEditing" />
</template>

<style scoped></style>
