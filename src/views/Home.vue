<template>
  <div class="home">
    <Hero />
    <!-- <Headlines /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero'
// import Headlines from '@/components/Headlines'

export default {
  name: 'Home',
  components: {
    Hero,
    // Headlines
  }
}
</script>
