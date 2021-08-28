<template>
  <div class="hello">
    <div class="min-h-screen bg-gray-900 w-full flex px-10">
      <div class="w-1/2 flex flex-wrap content-center">
        <div class="font-head font-black text-5xl text-red-600 italic border-b-2 border-red-600 pb-1 mb-6">CATALOG NEWS</div>
        <div class="font-head font-black text-white text-5xl laeding-normal mb-12 leading-tight">Katalog berita dari berbagai sumber</div>
        <div class="flex gap-8">
          <div class="font-body text-lg font-semibold bg-white px-10 py-4 rounded-full transform duration-300 hover:-translate-y-1 cursor-pointer tracking-wide align-middle">Lihat Headline</div>
          <div class="font-body text-white text-lg font-semibold bg-transparent border-2 border-white px-16 py-4 rounded-full transform duration-300 hover:-translate-y-1 cursor-pointer tracking-wide align-middle">Jelajahi</div>
        </div>
      </div>
      <div class="w-1/2 flex justify-end ">
        <img src="@/assets/breaking-news.jpg" alt="Photo by Markus Winkler on Unsplash" class="w-5/6 rounded-xl self-center transform duration-300 hover:scale-105">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
