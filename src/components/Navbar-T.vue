<template>
  <div class="w-full bg-transparent sticky top-0 px-10 py-6 flex justify-between place-content-center z-50 transition-all transform duration-500" id="header">
    <router-link to="/" class="text-2xl text-red-600 font-bold font-head align-middle self-center cursor-pointer">CNEWS</router-link>
    <div class="flex flex-row justify-center gap-4">
      <router-link to="/browse" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Jelajahi</router-link>
      <router-link to="/category/sports" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Olahraga</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Bisnis</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Teknologi</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Pendidikan</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Politik</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Kesehatan</router-link>
      <router-link to="/category" class="nav-item text-white text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-white">Hiburan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      let header = document.querySelector("#header")
      let item = document.querySelectorAll(".nav-item")
      header.classList.remove("bg-transparent", "py-6")
      header.classList.add("bg-white", "py-4", "shadow")
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("text-white", "hover:border-white")
        item[i].classList.add("text-gray-800", "hover:border-gray-800")
      }
    },
    scrollTop() {
      let header = document.querySelector("#header")
      let item = document.querySelectorAll(".nav-item")
      header.classList.remove("bg-white", "py-6", "shadow")
      header.classList.add("bg-transparent", "py-6")
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("text-gray-800", "hover:border-gray-800")
        item[i].classList.add("text-white", "hover:border-white")
      }
    },
    handleScroll() {
      if (window.scrollY > 20) {
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
}
</script>

<style>

</style>