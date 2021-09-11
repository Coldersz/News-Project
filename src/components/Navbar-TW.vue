<template>
  <div class="w-full bg-transparent sticky top-0 px-10 py-6 flex justify-between place-content-center z-50 transition-all transform duration-700" id="header">
    <router-link to="/" class="text-2xl text-red-600 font-bold font-head align-middle self-center cursor-pointer">CNEWS</router-link>
    <div class="flex flex-row justify-center gap-4">
      <router-link to="/browse" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Jelajahi</router-link>
      <router-link to="/category/sports" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Olahraga</router-link>
      <router-link to="/category/business" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Bisnis</router-link>
      <router-link to="/category/technology" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Teknologi</router-link>
      <router-link to="/category/education" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Pendidikan</router-link>
      <router-link to="/category/political" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Politik</router-link>
      <router-link to="/category/health" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Kesehatan</router-link>
      <router-link to="/category/entertainment" class="nav-item text-gray-800 text-center p-2 font-body font-bold text-lg cursor-pointer border-b-2 border-transparent transform transition-all duration-300 hover:border-gray-800">Hiburan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      let header = document.querySelector("#header")
      header.classList.remove("bg-transparent", "py-6")
      header.classList.add("bg-white", "py-4", "shadow")
    },
    scrollTop() {
      let header = document.querySelector("#header")
      header.classList.remove("bg-white", "py-6", "shadow")
      header.classList.add("bg-transparent", "py-6")
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