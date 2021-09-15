<template>
  <div class="h-screen bg-base">
    <div class="mx-10">
      <h2 class="text-4xl font-body font-black w-full block">Covid-19 Update</h2>
      <div class="grid grid-cols-4 gap-8 my-10">
        <a :href="article.url || '/'" target="_blank" v-for="article in articles" :key="article" class="w-full grid gap-4 group">
          <div class="item bg-cover bg-gradient-to-br from-black via-gray-900 to-black w-full h-40"></div>
          <!-- <div class="w-full grid gap-2 animate-pulse">
            <div class="bg-gray-400 w-28 h-5"></div>
            <div class="bg-gray-400 w-60 h-5"></div>
            <div class="bg-gray-400 w-48 h-5"></div>
          </div> -->
          <div class="w-full font-head font-black text-lg group-hover:underline">{{article.title || 'Judul Artikel'}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async fetchCovid() {
      try {
        const response = await this.$news({
          method: "GET",
          url: "/everything",
          params: {
            language: 'id',
            sortBy: 'publishedAt',
            qInTitle: 'covid',
            pageSize: 8,
            apiKey: process.env.VUE_APP_API_KEY
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
        this.articles = response.data.articles
        console.log(this.articles)
      } catch (e) {
        console.error(e);
      } finally {
        this.changeBackground()
      }
    },
    changeBackground() {
      setTimeout(() => {
        const items = document.querySelectorAll(".item")
        for (let i = 0; i < items.length; i++) {
          items[i].style.backgroundImage = `url(${this.articles[i].urlToImage || ''})`
          items[i].style.backgroundPosition = "center"
        }
      }, 100);
    }
  },
  created() {
    this.fetchCovid()
  }
}
</script>

<style>

</style>