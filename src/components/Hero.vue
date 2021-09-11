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
    <div class="w-full bg-transaprent sticky top-0 shadow px-10 py-4 flex justify-between place-content-center z-50 transition-all transform duration-1000" id="header">
      <div class="text-2xl text-red-600 font-bold font-head align-middle self-center cursor-pointer">CNEWS</div>
      <div class="flex flex-row justify-center gap-4">
        <router-link to="/browse" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Jelajahi</router-link>
        <router-link to="/category/sports" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Olahraga</router-link>
        <router-link to="/category/business" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Bisnis</router-link>
        <router-link to="/category/technology" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Teknologi</router-link>
        <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Pendidikan</router-link>
        <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Politik</router-link>
        <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Kesehatan</router-link>
        <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Hiburan</router-link>
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
  },
  methods: {
    scrollDown() {
      let header = document.querySelector("#header")
      let item = document.querySelectorAll(".nav-item")
      header.classList.remove("bg-transparent",)
      header.classList.add("bg-white", "shadow")
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("text-white", "hover:border-white")
        item[i].classList.add("text-gray-800", "hover:border-gray-800")
      }
    },
    scrollTop() {
      let header = document.querySelector("#header")
      let item = document.querySelectorAll(".nav-item")
      header.classList.remove("bg-white", "shadow")
      header.classList.add("bg-transparent")
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("text-gray-800", "hover:border-gray-800")
        item[i].classList.add("text-white", "hover:border-white")
      }
    },
    handleScroll() {
      if (window.scrollY >= screen.height) {
        this.scrollDown()
      } else {
        this.scrollTop()
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll)
  }
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
