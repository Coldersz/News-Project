<template>
  <div class="min-h-screen w-full px-10 py-14">
    <div class="w-full flex justify-between">
      <h1 class="text-5xl font-head font-bold w-full block">Liputan 6</h1>
      <div class="flex gap-4">
        <div class="bg-gray-900 rounded-full place-self-center px-10 py-3 text-white text-xl font-body font-semibold cursor-pointer transform duration-300 hover:-translate-y-1 hover:shadow-lg">Terbaru</div>
        <div class="bg-transparent border-2 border-gray-900 rounded-full place-self-center px-8 py-3 text-xl font-body font-semibold cursor-pointer transform duration-300 hover:-translate-y-1 hover:shadow-lg">Terpopuler</div>
      </div>
    </div>
    <div class="w-full my-10 grid gap-8 grid-cols-3">
      <div
        v-for="article in articles"
        :key="article.id"
        class="
          w-full
          flex flex-col
          p-5
          rounded-xl
          cursor-pointer
          shadow-custom
          transform
          duration-300
          hover:shadow-custom-2
          hover:-translate-y-1
        "
      >
        <img src="@/assets/breaking-news.jpg" class="rounded-lg" />
        <div class="w-full px-1 mt-4 mb-2 text-xl font-body font-semibold">
          {{article.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {id: 1, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 2, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 3, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 4, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 5, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 6, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 7, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 8, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 9, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
        {id: 10, content: "Pasca-teror Penikaman, Supermarket Selandia Baru Kosongkan Pisau dari Rak Penjualan"},
      ],
    };
  },
};
</script>

<style>
</style>