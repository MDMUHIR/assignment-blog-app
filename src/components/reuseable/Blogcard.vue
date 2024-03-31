<script setup>
import { ref } from "vue";
const props = defineProps(["blog"]);

const showFullText = ref(false);
function displayedText(body) {
  if (!this.showFullText) {
    // return body.split(" ").slice(0, 20).join(" ");
    return body.slice(0, 150);
  } else {
    return body;
  }
}

import { useBlogStore } from "../../stores/blog";
const store = useBlogStore();
</script>

<template>
  <!-- <router-link :to="{ name: 'blogSingle', params: { id: blog.id } }"> -->
  <!-- <router-link :to="`/blog/${blog.id}`"> -->
  <div
    class="card relative rounded-lg overflow-hidden bg-white hover:shadow-2xl m-5 border-2"
  >
    <div class="h-40">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
        alt="City"
        class="h-40 w-full object-cover object-center"
      />
    </div>
    <div class="h-1/2 p-4">
      <h3 class="mb-2 text-xl font-semibold text-blue-800">
        {{ blog.title }}
      </h3>
      <!-- <p class="text-sm font-bold text-orange-500">perspiciatis</p> -->
      <div class="body break-words">
        {{ displayedText(blog.body) }}
        <router-link :to="{ name: 'blogSingle', params: { id: blog.id } }">
          <button
            @click="showFullText = !showFullText"
            class="text-red-400 hover:text-red-500  font-bold ms-2"
          >
            <span v-if="showFullText">See less</span>
            <span v-else>... See more</span>
          </button>
        </router-link>
      </div>
    </div>
    <button
      @click="store.deletePost(blog.id)"
      class="px-2 m-2 text-white bg-red-500 hover:bg-red-600 border-2 rounded-lg absolute top-0 right-0"
    >
      Del
    </button>
    <button
      @click="store.triggerUpdate(blog)"
      class="px-2 m-2 text-white bg-stone-500 hover:bg-stone-600 border-2 rounded-lg absolute top-0 left-0"
    >
      Edit
    </button>
  </div>
  <!-- </router-link> -->
</template>

<style scoped></style>
../../stores/blog
