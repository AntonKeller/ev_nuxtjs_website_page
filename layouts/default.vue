<template>
  <div>
    <evHeader/>
    <transition name="home">
      <Nuxt/>
    </transition>
  </div>
</template>

<script>

import evHeader from "@/components/widgets/ev-header.vue"

export default {
  name: "default",
  components: {
    'evHeader': evHeader,
  },
}
</script>

<style scoped>
.home-enter-active, .home-leave-active {
  transition: opacity .3s;
}
.home-enter, .home-leave-active {
  transform: translateX(100%);
  opacity: 0;
}
</style>
