<template>
  <div class="bg-base">
    <Navbar />
    <div class="min-h-screen w-full px-10 py-14">
      <div class="w-full flex justify-between">
        <h1 class="text-5xl font-head font-bold w-full block">Olahraga</h1>
        <div class="flex gap-4">
          <div
            class="
              bg-gray-900
              rounded-full
              place-self-center
              px-10
              py-3
              text-white text-xl
              font-body font-semibold
              cursor-pointer
              transform
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Terbaru
          </div>
          <div
            class="
              bg-transparent
              border-2 border-gray-900
              rounded-full
              place-self-center
              px-8
              py-3
              text-xl
              font-body font-semibold
              cursor-pointer
              transform
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Terpopuler
          </div>
        </div>
      </div>
      <div class="w-full my-10 grid grid-cols-3 gap-4">
        <div v-for="article in articles" :key="article" class="w-full h-64 flex flex-col">
          <a :href="article.url || '/'" target="_blank" class="top-headline h-full w-full grid place-content-between bg-cover bg-black hover:mix-blend-multiply transition-all transform duration-300 group" id="headline">
            <div class="block mx-6 mt-3 font-body font-bold opacity-0 invisible">VIVA.CO.ID</div>
            <div class="block font-head font-bold text-xl text-white m-6 transform duration-300 group-hover:translate-x-2">{{ article ? article.title : 'Silakan refresh beberapa saat lagi...' }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar-TW";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async fetchSports() {
      try {
        const response = await this.$news({
          methods: "GET",
          url: "/top-headlines",
          params: {
            country: "id",
            category: "sports",
            apiKey: process.env.VUE_APP_API_KEY,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        });
        this.articles = response.data.articles
        this.changeBackground()
      } catch (e) {
        console.error(e);
      } 
    },
    changeBackground() {
      setTimeout(() => {
        const headline = document.querySelectorAll(".top-headline")
        for (let i = 0; i < headline.length; i++) {
          headline[i].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.3)), url(${this.articles[i].urlToImage})`
        }
      }, 100);
    }
  },
  created() {
    this.fetchSports()
  }
};
</script>

<style>
</style>