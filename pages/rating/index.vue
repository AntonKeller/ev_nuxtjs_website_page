<template>
  <div class="absolute top-0 left-0 right-0 bg-gray-900 pt-28 h-full flex justify-center back">

    <div class="p-4 w-auto flex flex-col items-center backdrop-blur-lg overflow-hidden backdrop-brightness-75">

      <!--buttons-->
      <div class="text-center flex justify-center flex-wrap buttonAnimate">
        <div
          v-for="ratingButton of ratingButtons"
          @click="setActiveButtonYear(ratingButton.year)"
          :class="{'bg-red-800 ease-out':activeButtonYear !== ratingButton.year}"
          class="transition-all cursor-pointer hover:bg-transparent active:scale-95 border-2 border-red-800  text-gray-200 flex w-full sm:w-auto flex justify-center items-center rounded-sm mt-2 pt-2 pb-2 pl-6 pr-8 first:ml-0 ml-0 sm:ml-3">
          <span class="-rotate-90 select-none"><</span>
          <h3 class="ml-5">{{ ratingButton.title }}</h3>
        </div>
      </div>

      <div
        v-for="ratingDescription of ratingDescriptions"
        :class="{'hidden':activeButtonYear !== ratingDescription.year}"
        class="w-full mt-20 text-gray-200 ">

        <div class="ratingShowAnimate" v-for="key of ratingDescription.keys">
          <div class="flex flex-col w-full">
            <div class="flex flex-row mt-6">
              <div class="rounded-sm w-4/6 bg-red-800 h-8 flex items-center p-4">{{ key.title }}</div>
              <div class="rounded-sm w-12 bg-red-800 h-8 ml-4 flex justify-center items-center p-4">
                {{ key.value || "-" }}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import evHeader from "@/components/widgets/ev-header.vue"
import {ratingButtons, ratingDescriptions} from "@/configs/ratingConfig.ts"

export default {
  name: "rating",
  components: {
    'aboutHeader': evHeader,
  },

  data() {
    return {
      ratingButtons,
      ratingDescriptions,
      activeButtonYear: Number,
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
  background-image: url("@/assets/fones/f-7.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.ratingShowAnimate {
  animation-name: moveRating;
  animation-duration: 1.2s;
  transition: ease-out;
}

@keyframes moveRating {
  from {
    opacity: 1;
    width: 100%;
  }
  50% {
    opacity: 0;
    width: 0;
    font-size: 1px;
  }
  to {
    opacity: 1;
    width: 100%;
  }
}

.buttonAnimate {
  animation-name: moveButton;
  animation-duration: 1s;
}


@keyframes moveButton {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
