<template>
  <div
    class="hello bg-gradient-to-br from-black via-gray-800 to-black bg-cover"
  >
    <div class="min-h-screen w-full flex px-10 ">
      <div class="w-1/2 flex flex-wrap content-center">
        <div
          class="
            font-head font-black
            text-4xl text-red-600
            italic
            border-b-2 border-red-600
            pb-1
            mb-6
          "
        >
          CATALOG NEWS
        </div>
        <div
          class="
            font-head font-black
            text-white text-5xl
            laeding-normal
            mb-12
            leading-tight
          "
        >
          Katalog berita dari berbagai sumber
        </div>
        <div class="flex gap-8">
          <div
            class="
              font-body
              text-lg
              font-semibold
              bg-white
              px-10
              py-4
              rounded-full
              transform
              duration-300
              hover:-translate-y-1
              cursor-pointer
              tracking-wide
              align-middle
            "
          >
            Lihat Headline
          </div>
          <router-link
            to="/browse"
            class="
              font-body
              text-white text-lg
              font-semibold
              bg-transparent
              border-2 border-white
              px-16
              py-4
              rounded-full
              transform
              duration-300
              hover:-translate-y-1
              cursor-pointer
              tracking-wide
              align-middle
            "
            >Jelajahi</router-link
          >
        </div>
      </div>
      <div class="w-1/2 flex justify-end">
        <img
          src="@/assets/globe-3.png"
          alt="Globe"
          class="
            w-5/6
            rounded-xl
            self-center
            transform
            duration-300
            hover:scale-105
          "
        />
      </div>
    </div>
    <div class="w-full bg-white sticky top-0 shadow px-10 py-4 flex justify-between place-content-center z-50">
      <div class="text-2xl text-red-600 font-bold font-head align-middle self-center cursor-pointer">CNEWS</div>
      <div class="flex flex-row justify-center gap-4">
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Jelajahi</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Olahraga</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Bisnis</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Teknologi</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Pendidikan</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Politik</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Ekonomi</div>
        <div class=" text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Sosial</div>
      </div>
    </div>
    <Headlines />
  </div>
</template>

<script>
import Headlines from './Headlines';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Headlines
  }
  // if (window.scrollY > screen.height)
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.stick {
  position: -webkit-sticky;
  position: sticky;
  top: 0 !important;
}
</style>
