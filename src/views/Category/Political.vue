<template>
  <div class="bg-base">
    <Navbar />
    <div class="min-h-screen w-full px-4 lg:px-10 py-14">
      <Contents :title="title" :articles="articles" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar-TW";
import Contents from "@/components/CategoryItems"

export default {
  components: {
    Navbar,
    Contents
  },
  data() {
    return {
      title: "Politik",
      articles: [],
    };
  },
  methods: {
    async fetchPoltics() {
      try {
        const response = await this.$news({
          methods: "GET",
          url: "/everything",
          params: {
            language: "id",
            q: "politik",
            sortBy: "relevancy",
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
          headline[i].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${this.articles[i].urlToImage || ''})`
          headline[i].style.backgroundPosition = "center"
        }
      }, 100);
    }
  },
  created() {
    this.fetchPoltics()
  }
};
</script>

<style>
</style>