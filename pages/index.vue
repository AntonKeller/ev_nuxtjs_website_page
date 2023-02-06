<template>
  <div class="relative">

    <evHeader/>

    <video class="brightness-50 relative hidden top-0 md:block w-full p-0 m-0" autoplay muted loop
           src="https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4">
    </video>

    <div
      class="md:w-72 lg:w-96 hidden md:block absolute left-16 md:top-40 lg:top-48 text-gray-50 transition-all ease-out">
      <div class="inline-block md:pb-1.5 lg:pb-2.5 w-auto md:text-2xl lg:text-3xl md:mb-2 mb-4 border-b-2 border-b-red-700">
        Наш рейтинг:
      </div>
      <div class="md:text-md lg:text-xl md:mb-2 lg:mb-4">
        Наши специалисты успешно осуществили и завершили проекты для более чем 50 компаний из рейтинга «Крупнейшие
        компании России».
      </div>
      <div
        class="md:w-36 lg:w-40 md:text-md lg:text-lg hover:bg-red-800 transition-all ease-out text-center inline-block p-2 bg-red-700 rounded-lg cursor-pointer">
        Рейтинг Эксперт-400
      </div>
      <div
        class="md:w-20 lg:w-24 md:text-md lg:text-lg bg-transparent backdrop-blur-md hover:bg-gray-200 hover:text-black transition-all ease-out text-center inline-block p-2 border border-gray-500 text-gray-50 rounded-lg cursor-pointer">
        О нас
      </div>
    </div>

    <div class="backdrop-blur-sm hidden md:block absolute top-28 right-52 w-auto text-gray-50">
      <div class="flex relative">
        <div
          class="w-48 flex items-center justify-center hover:opacity-50 m-0.5 border-b border-t border-gray-500 p-6 backdrop-blur-xs transition-all ease-out cursor-pointer">
          <span class="block text-center">Оценка</span>
        </div>
        <div
          class="w-48 flex items-center justify-center hover:opacity-50 m-0.5 border-b border-t border-gray-500 p-6 backdrop-blur-xs transition-all ease-out cursor-pointer">
          <span class="block text-center">Строительный консалтинг</span>
        </div>
      </div>
      <div class="flex relative">
        <div
          class="w-48 flex items-center justify-center hover:opacity-50 m-0.5 border-b border-t border-gray-500 p-6 backdrop-blur-xs transition-all ease-out cursor-pointer">
          <span class="block text-center">Финансовый консалтинг</span>
        </div>
        <div
          class="w-48 flex items-center justify-center hover:opacity-50 m-0.5 border-b border-t border-gray-500 p-6 backdrop-blur-xs  transition-all ease-out cursor-pointer">
          <span class="block text-center">. . .</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import evHeader from "@/components/widgets/ev-header.vue"

export default Vue.extend({
  name: 'IndexPage',
  components: {
    'evHeader': evHeader,
  },
})
</script>

<style>

</style>
