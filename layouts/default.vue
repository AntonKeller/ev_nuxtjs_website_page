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

</style>
