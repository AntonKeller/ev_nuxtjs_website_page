<template>
  <div class="absolute left-0 right-0 top-0 bottom-0">

    <video @mouseover="menuIsVisible=false" class="fixed top-0 left-0 object-cover w-full h-screen brightness-50 hidden md:block p-0 m-0" autoplay muted loop
           src="@/assets/videos/clip.mp4">
    </video>

    <div class="w-full flex justify-end items-end absolute right-0 md:top-40 lg:top-42 pr-60">
      <div class="md:w-72 lg:w-6/12 hidden md:block text-gray-50 transition-all ease-out">
        <h1 class="w-full inline-block title md:text-2xl lg:text-4xl md:pb-1.5 lg:pb-2.5 w-auto md:mb-2 mb-4 border-b-2 border-b-red-700 ease-out">
          О компании
        </h1>
        <p class="w-full inline-block description md:text-md lg:text-2xl md:mb-2 lg:mb-4 ease-out">
          Компания Эверест Консалтинг создана в 2010 году. Учредители компании ранее занимали руководящие позиции в группе оценки
          российского подразделения международной аудиторской компании PricewaterhouseCoopers.
          Наша цель – оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового, управленческого,
          налогового и строительного) специалистами, обладающими международными квалификациями и значительным опытом выполнения подобных
          проектов как в России, так и за рубежом.
        </p>
        <!--      <div-->
        <!--        class="md:w-36 lg:w-40 md:text-md lg:text-lg hover:bg-red-800 transition-all ease-out text-center inline-block p-2 bg-red-700 rounded-lg cursor-pointer">-->
        <!--        Рейтинг Эксперт-400-->
        <!--      </div>-->
        <!--      <div-->
        <!--        class="md:w-20 lg:w-24 md:text-md lg:text-lg bg-transparent backdrop-blur-md hover:bg-gray-200 hover:text-black transition-all ease-out text-center inline-block p-2 border border-gray-500 text-gray-50 rounded-lg cursor-pointer">-->
        <!--        О нас-->
        <!--      </div>-->
      </div>
    </div>

<!--    <div-->
<!--      class="md:w-72 lg:w-96 hidden md:block absolute left-16 md:top-40 lg:top-48 text-gray-50 transition-all ease-out">-->
<!--      <div-->
<!--        class="inline-block md:pb-1.5 lg:pb-2.5 w-auto md:text-2xl lg:text-3xl md:mb-2 mb-4 border-b-2 border-b-red-700">-->
<!--        Заголовок 2-->
<!--      </div>-->
<!--      <div class="md:text-md lg:text-xl md:mb-2 lg:mb-4">-->
<!--        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, deleniti.-->
<!--      </div>-->
<!--&lt;!&ndash;      <div&ndash;&gt;-->
<!--&lt;!&ndash;        class="md:w-36 lg:w-40 md:text-md lg:text-lg hover:bg-red-800 transition-all ease-out text-center inline-block p-2 bg-red-700 rounded-lg cursor-pointer">&ndash;&gt;-->
<!--&lt;!&ndash;        Lorem ipsum dolor.&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div&ndash;&gt;-->
<!--&lt;!&ndash;        class="md:w-20 lg:w-24 md:text-md lg:text-lg bg-transparent backdrop-blur-md hover:bg-gray-200 hover:text-black transition-all ease-out text-center inline-block p-2 border border-gray-500 text-gray-50 rounded-lg cursor-pointer">&ndash;&gt;-->
<!--&lt;!&ndash;        Lorem.&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->

    <div v-if="menuIsVisible" class="backdrop-blur-sm hidden md:block absolute top-28 right-52 w-auto text-gray-50">
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

<script>

import evHeader from "@/components/widgets/ev-header.vue"

export default {

  name: 'IndexPage',

  components: {
    'evHeader': evHeader,
  },

  data() {
    return {
      menuIsVisible: false
    }
  },

  methods: {
    visibleHandler() {
      this.menuIsVisible = true;
    },
  }
}

</script>

<style>

.title {
  animation-duration: .8s;
  animation-name: d-1;
}

.description {
  animation-duration: 1s;
  animation-name: d-2;
}

@keyframes d-1 {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {

  }
}

@keyframes d-2 {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {

  }
}

</style>
