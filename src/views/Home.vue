<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Headlines />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import Headlines from '@/components/Headlines'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Headlines
  }
}
</script>
