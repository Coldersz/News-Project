<template>
  <div class="w-full flex justify-between">
    <h1 class="text-5xl font-head font-bold w-full block">{{ title }}</h1>
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
    <div
      v-for="article in articles"
      :key="article"
      class="w-full h-64 flex flex-col"
    >
      <a
        :href="article.url || '/'"
        target="_blank"
        class="
          top-headline
          h-full
          w-full
          grid
          place-content-between
          bg-cover bg-gradient-to-br from-black via-gray-900 to-black
          transition-all
          transform
          duration-300
          group
        "
        id="headline"
      >
        <div class="block mx-6 mt-3 font-body font-bold opacity-0 invisible">
          VIVA.CO.ID
        </div>
        <div
          class="
            block
            font-head font-bold
            text-xl text-white
            m-6
            transform
            duration-300
            group-hover:translate-x-2
          "
        >
          {{
            article ? article.title : "Silakan refresh beberapa saat lagi..."
          }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "articles"],
};
</script>

<style>
</style>