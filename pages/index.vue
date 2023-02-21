<template>
  <div
    class="h-screen p-2 overflow-y-scroll sm:overflow-hidden flex flex-col justify-center items-center">
    <video
           class="fixed top-0 left-0 object-cover w-full h-screen brightness-50 hidden md:block p-0 m-0" autoplay muted
           loop
           src="@/assets/videos/clip.mp4">
    </video>

    <div class="z-10 text-gray-400    flex flex-col justify-center items-center sm:p-4 md:p-6 lg:p-8 xl:p-10  w-12/12 sm:w-10/12 md:w-8/12">
      <h1 class="text-xl md:text-2xl lg:text-4xl   text-center text-gray-300 font-bold   mb-6 border-b border-b-gray-400">
        О компании
      </h1>

      <div class="w-full flex flex-col justify-center items-center">

        <div class="w-full flex flex-col justify-center items-center">
          <h1 class="text-gray-300 font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center">Компания Эверест
            Консалтинг</h1>
          <p class="sm:text-lg md:text-lg lg:text-xl   text-center text-gray-300   mb-4   transition-all ease-in">
            Cоздана в 2010 году. Учредители компании ранее занимали руководящие позиции в группе оценки российского
            подразделения международной аудиторской компании PricewaterhouseCoopers.
          </p>
        </div>

        <div class="w-full flex flex-col justify-center items-center">
          <h1 class="text-gray-300 font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center">Наша цель</h1>
          <p class="sm:text-base md:text-lg lg:text-xl   text-center text-gray-300   transition-all ease-in">
            Оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового,
            управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и
            значительным опытом выполнения подобных проектов как в России, так и за рубежом.
          </p>
        </div>
      </div>

    </div>

    <!--    <div class="w-full flex flex-col sm:flex-row justify-center items-center">-->
    <!--      <div class="relative w-full h-64 sm:w-64 sm:h-64 border border-gray-600 rounded-md2 mb-2 sm:ml-0 img-1">-->
    <!--        <div class="absolute left-0 bottom-0 w-full bg-gray-700 text-gray-300 text-center">Ivanov Ivan. General director.</div>-->
    <!--      </div>-->
    <!--      <div class="relative w-full h-64 sm:w-64 sm:h-64 border border-gray-600 rounded-md2 mb-2 sm:ml-6 img-2">-->
    <!--        <div class="absolute left-0 bottom-0 w-full bg-gray-700 text-gray-300 text-center">Ivanov Ivan. General director.</div>-->
    <!--      </div>-->
    <!--      <div class="relative w-full h-64 sm:w-64 sm:h-64 border border-gray-600 rounded-md2 mb-0 sm:ml-6 img-3">-->
    <!--        <div class="absolute left-0 bottom-0 w-full bg-gray-700 text-gray-300 text-center">Ivanov Ivan. General director.</div>-->
    <!--      </div>-->
    <!--    </div>-->

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
    return {}
  },

  methods: {}
}

</script>

<style>

.img-1 {
  background-image: url("https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/people/a/ey-albert-lee-v2.jpg.rendition.690.460.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img-2 {
  background-image: url("https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/people/a/ey-albert-lee-v2.jpg.rendition.690.460.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.img-3 {
  background-image: url("https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/people/a/ey-albert-lee-v2.jpg.rendition.690.460.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.lowRed {
  background: rgba(255, 255, 255, 0.8)
}

.title {
  animation-duration: .8s;
  animation-name: d-1;
}

.description {
  animation-duration: 1s;
  animation-name: d-1;
}

@keyframes d-1 {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {

  }
}

</style>
