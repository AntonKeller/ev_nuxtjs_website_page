<template>
  <div class="min-h-screen bg-gray-900 pt-6 md:pt-28 back">
    <div class="pl-4 pr-4 md:pl-12 md:pr-12 lg:pl-32 lg:pr-32 xl:pl-56 xl:pr-56 w-auto flex flex-col items-center backdrop-blur-lg overflow-hidden ">

      <div class="w-full flex overflow-x-scroll md:overflow-auto md:flex-wrap md:w-full md:justify-center years-buttons backdrop-blur-sm md:pb-6">
        <div
          v-for="element of rating"
          @click="setActiveButtonYear(element.year)"
          :class="{'bg-red-800 ease-out ': activeButtonYear !== element.year}"
          class="flex justify-center items-center transition-all cursor-pointer hover:bg-transparent border-2 border-red-800 text-gray-300 rounded-sm p-4 pt-2 pb-2 m-2 first:ml-0 md:text-lg">
          <span class="select-none duration-150 ease-in transition-all" :class="{'-rotate-90': activeButtonYear === element.year}"><</span>
          <h3 class="ml-5">{{ element.year }}</h3>
        </div>
      </div>

      <p class="text-gray-300 text-base md:text-lg text-center">
        Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400),
        совокупная выручка которых за 2008 год превысила 9.3 трлн. руб. Основным деловым преимуществом нашей компании является высокий профессионализм
        сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными
        аудиторскими компаниями. Специалисты Компании Everest Consulting являются членами таких профессиональных организаций, как Саморегулируемая
        Межрегиональная Ассоциация Оценщиков (СМАО),  Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков (ASA).
      </p>

      <div
        v-for="element of rating"
        :class="{'hidden':activeButtonYear !== element.year}"
        class="overflow-y-scroll md:overflow-auto w-full md:mt-2 lg:mt-4 text-base md:text-lg">
        <div v-for="key of element.keys" class="ratingShowAnimate">
            <div class="flex flex-col md:flex-row mt-4 items-center">
              <div class="text-gray-800 rounded-sm bg-gray-300 w-full md:max-h-10 flex text-center md:text-left justify-center md:justify-start items-center p-3 md:p-6">
                {{ key.title }}
              </div>

              <div class="text-gray-300 rounded-sm bg-red-800 w-full md:w-16 h-4 md:max-h-12 md:ml-3 flex justify-center items-center p-4 md:p-6">
                {{ key.value || "-" }}
              </div>
            </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import evHeader from "@/components/widgets/ev-header.vue"
import {rating} from "@/configs/ratingConfig.ts"

export default {
  name: "rating",
  components: {
    'aboutHeader': evHeader,
  },

  data() {
    return {
      rating,
      activeButtonYear: Number,
      isActiveMenu: true
    }
  },

  mounted() {
    this.activeButtonYear = 2021;
  },

  methods: {
    setActiveButtonYear(id) {
      this.activeButtonYear = id;
    }
  },
}
</script>

<style scoped>

.back {
  background: center/cover url("@/assets/background/b-2.png") no-repeat;
}

.ratingShowAnimate {
  animation: moveRating-1 ease 0.8s;
}

@keyframes moveRating-1 {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
}

.years-buttons {
  animation: years-buttons-animate ease 0.8s;
}

@keyframes years-buttons-animate {
  from {
    opacity: 0;
  }
}

</style>
