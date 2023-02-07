<template>
  <div class="bg-gray-200 mt-32 flex items-center flex-col">
    <div class="w-8/12 bg-gray-50 text-center mb-2 p-4 m-1">
      <h1 class="text-4xl">ЭВЕРЕСТ КОНСАЛТИНГ</h1>
    </div>
    <div class="w-8/12 bg-gray-50 text-center flex justify-center p-4 m-1">
      <h1 class="text-2xl mr-8">О компании</h1>
      <h1 class="text-2xl mr-8">Руководство</h1>
      <h1 class="text-2xl mr-8">Вакансии</h1>
      <h1 class="text-2xl">Контакты</h1>
    </div>
  </div>
</template>

<script>
import evHeader from "@/components/widgets/ev-header.vue"

export default {
  name: "about",
  components: {
    'aboutHeader': evHeader,
  },
}
</script>

<style scoped>

</style>
