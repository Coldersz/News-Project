<template>
  <div class="h-screen bg-base">
    <div class="mx-10 py-24">
      <div class="w-full flex gap-8">
        <div class="w-4/6">
          <a :href="topHeadline.url || '/'" target="_blank" class="top-headline h-96 w-full grid place-content-between bg-cover bg-black hover:mix-blend-multiply transition-all transform duration-300 group" id="headline">
            <div class="block mx-6 mt-3 font-body font-bold opacity-0 invisible">VIVA.CO.ID</div>
            <div class="block font-head font-bold text-3xl text-white m-6 transform duration-300 group-hover:translate-x-2">{{ topHeadline ? topHeadline.title : 'Silakan refresh beberapa saat lagi...' }}</div>
          </a>
        </div>
        <div class="w-2/6">
          <div class="h-96 w-full ">
            <div class="font-body font-semibold text-2xl">Headlines lainnya</div>
            <div class="w-full mt-3">
              <a v-for="article in articles" :key="article" :href="article.url" target="_blank" class="py-2 font-body border-b group flex">
                <span class="font-bold mr-4">#</span>
                <div class="transform duration-300 group-hover:translate-x-1 truncate">
                  {{article.title}}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles : [],
      topHeadline: {}
    }
  },
  methods: {
    async fetchHeadlines() {
      try {
        const response = await this.$news({
          method: "GET",
          url: "/top-headlines",
          params: {
            country: 'id',
            apiKey: process.env.VUE_APP_API_KEY
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        this.articles = response.data.articles.slice(1, 9)
        this.topHeadline = response.data.articles[0]
        this.changeBackground()
      } catch (e) {
        console.error(e);
      }
    },
    changeBackground() {
      const headline = document.querySelector(".top-headline")
      headline.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.4)), url(${this.topHeadline.urlToImage})`
    }
  },
  created() {
    this.fetchHeadlines()
  }
};
</script>

<style>
</style>