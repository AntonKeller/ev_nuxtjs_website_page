<template>
  <div>
    <evHeader/>
    <Nuxt/>
  </div>
</template>

<script>
import evHeader from "@/components/widgets/ev-header.vue"
import Nuxt from "vue"

export default {
  name: "default",
  components: {
    'evHeader': evHeader,
  },
}
</script>

<style scoped>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>
