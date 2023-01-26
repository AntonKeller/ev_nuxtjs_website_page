<template>
  <div class="relative">
    <evHeader/>

    <video class="brightness-50 relative hidden top-0 md:block w-full p-0 m-0" autoplay muted loop
           src="https://wedistill.io/uploads/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4">
    </video>

    <div class="hidden md:block absolute left-16 md:top-40 lg:top-48 text-gray-50 w-96 transition-all ease-out">
      <h1 class="inline-block pb-2.5 w-auto text-3xl mb-4 border-b-2 border-b-red-700">Наш рейтинг:</h1>
      <h1 class="text-xl mb-4">
        Наши специалисты успешно осуществили и завершили проекты для более чем 50 компаний из рейтинга «Крупнейшие
        компании России».
      </h1>
      <div
        class="w-40 hover:bg-red-800 transition-all ease-out text-center inline-block p-2 bg-red-700 rounded-lg cursor-pointer">
        Рейтинг Эксперт-400
      </div>
      <div
        class="bg-transparent backdrop-blur-md w-24 hover:bg-gray-200 hover:text-black transition-all ease-out text-center inline-block p-2 border border-gray-500 text-gray-50 rounded-lg cursor-pointer">
        О нас
      </div>
    </div>

    <div class="hidden md:block absolute top-36 right-40 w-auto text-gray-50">
      <div class="flex relative">
        <div
          class="w-48 border-t border-r m-0.5 border-gray-500 p-6 backdrop-blur-xs hover:backdrop-brightness-75 transition-all ease-out cursor-pointer">
          Оценка
        </div>
        <div
          class="w-48 border-t border-l m-0.5 border-gray-500 p-6 backdrop-blur-xs hover:backdrop-brightness-75 transition-all ease-out cursor-pointer">
          Строительный консалтинг
        </div>
      </div>
      <div class="flex relative">
        <div
          class="relative w-48 border-t border-r border-b m-0.5 border-gray-500 p-6 backdrop-blur-xs hover:backdrop-brightness-75 transition-all ease-out cursor-pointer">
          Финансовый консалтинг
        </div>
        <div
          class="w-48 border-t border-l border-b m-0.5 border-gray-500 p-6 backdrop-blur-xs hover:backdrop-brightness-75 transition-all ease-out cursor-pointer">
          Финансовый консалтинг
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import evHeader from "../components/widgets/ev-header.vue"

export default Vue.extend({
  name: 'IndexPage',
  components: {
    'evHeader': evHeader,
  },
  data() {
    return {
      isActive: true,
    }
  },
})
</script>

<style>

</style>
