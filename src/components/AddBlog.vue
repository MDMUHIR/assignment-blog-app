<script setup>
import { useBlogStore } from "../stores/blog";
const store = useBlogStore();
</script>

<template>
  <div
    class="addNew fixed top-10 right-0 left-0 bg-zinc-800 bg-opacity-80 p-5 rounded-lg m-10 text-white"
  >
    <p class="text-center text-xl">Create Post</p>
    <div class="input-group px-5">
      <label class="text-xl font-semibold" for="forTitle">Title</label>
      <input
        v-model="store.newPost.title"
        class="border-0 focus:outline-none w-full p-3 rounded text-2xl mt-2 text-black"
        type="text"
        id="forTitle"
        placeholder="What's on your mind?"
      />
    </div>
    <div class="input-group px-5 mt-3">
      <label class="text-xl font-semibold" for="forBody">Content</label>
      <textarea
        v-model="store.newPost.body"
        class="border-0 w-full p-3 rounded mt-2 focus:outline-none text-black"
        id="forBody"
        name="forBody"
        rows="3"
        cols="50"
      >
      </textarea>
    </div>
    <button
      @click="store.createPost()"
      class="w-full p-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600"
    >
      Post
    </button>

    <button
      @click="store.createPostShow = !store.createPostShow"
      class="px-2 py-1 m-1 rounded-lg bg-red-500 hover:bg-red-700 text-white float-end"
    >
      Cancel
    </button>
  </div>
</template>

<style scoped></style>
