<template>
  <div class="bg-gradient-to-br from-black via-gray-800 to-black bg-cover">
    <Navbar />
    <div class="min-h-screen w-full px-10 py-14">
      <h1 class="text-white text-5xl font-body font-bold w-full block">
        Jelajahi
      </h1>
      <div class="w-full my-10 h-auto grid gap-8 grid-cols-4">
        <div
          v-for="source in sources"
          :key="source"
          class="
            bg-transparent
            font-body font-semibold
            text-center text-white text-xl
            py-6
            border-2 border-white
            rounded-full
            cursor-pointer
            transform
            duration-300
            hover:bg-white
            hover:text-gray-800
          "
        >
          {{ source }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar-T";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      sources: [
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
        "Liputan 6",
      ],
    };
  },
};
</script>

<style>
</style>