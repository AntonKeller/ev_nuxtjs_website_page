<template>
  <div class="flex flex-row h-screen  pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 back">

    <div class="h-screen w-4/12 flex flex-col justify-center items-start border-r border-r-gray-600">
      <ul class="w-full flex flex-col justify-center items-start">
        <li
          v-for="tab of serviceTabs"
          @click="activeTab=tab.id"
          :class="{'uppercase mt-4':tab.sub, 'pl-10':!tab.sub}"
          class="hover:text-red-700 cursor-pointer z-30 show-left font-bold text-lg lg:text-xl mb-4 text-gray-300 text-center w-full transition-colors duration-150">
          {{ tab.title }}
          <div v-if="tab.id === 8" class="w-full gray-line"></div>
        </li>
      </ul>
    </div>

    <div
      v-for="currentTab of serviceTabContent"
      v-if="activeTab===currentTab.id"
      class="overflow-y-scroll overflow-x-hidden w-8/12 pl-2 pr-2 sm:pl-10 sm:pr-10 md:pl-18 md:pr-18 lg:pl-24 lg:pr-24 xl:pl-28 xl:pr-28 pt-24 h-screen flex flex-col justify-start items-start">

      <div v-for="content of currentTab.content" class="flex flex-col justify-start items-start mt-12 max-w-full">

        <h4 v-if="content.title.length" class="show-left font-bold text-2xl mb-4 text-gray-300 text-center mb-4">
          {{ content.title }}
        </h4>

        <div v-if="content.underline" class="w-full red-line"></div>

        <p v-if="content.textContent.length" v-for="text of content.textContent" class="text-lg text-gray-300 mb-6">
          {{ text }}
        </p>

        <ul v-if="content.enums.length" class="text-gray-300 mt-4">
          <li v-for="enumValue of content.enums" class="text-base text-lg">
            <span class="inline-block  w-4 h-2 rounded-sm red-line-heavy"></span>
            {{ enumValue }}
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>

import {serviceTabContent, serviceTabs} from "@/configs/servicesConfig"

export default {
  name: "services",

  components: {},

  methods: {},

  data() {
    return {
      hoverTab: 0,
      activeTab: 0,
      serviceTabContent,
      serviceTabs
    }
  },
}
</script>

<style scoped>

*::-webkit-scrollbar {
  width: 0;
}

.back {
  background-image: url("@/assets/background/f-10.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.red-line, .gray-line {
  min-height: 2px;
}

.gray-line-heavy {
  background: linear-gradient(to right, rgba(75, 85, 99, 0.5), rgb(99, 112, 129), rgba(75, 85, 99, 0.5));
}

.red-line-heavy {
  background: linear-gradient(to right, rgba(99, 75, 91, 0.5), rgb(129, 99, 125), rgba(99, 75, 87, 0.5));
}

.gray-line {
  background: linear-gradient(to right, rgba(75, 85, 99, 0.1), rgba(75, 85, 99, 0.35), rgb(99, 112, 129), rgba(75, 85, 99, 0.35), rgba(75, 85, 99, 0.1));
}

.red-line {
  background: linear-gradient(to right, rgba(99, 75, 92, 0.1), rgba(99, 75, 91, 0.35), rgb(129, 99, 125), rgba(99, 75, 87, 0.93), rgba(75, 85, 99, 0.1));
}

h1, h2, h3, h4, h5, li, p {
  animation-duration: .75s;
  animation-name: showFast;
  animation-timing-function: ease-in-out;
  text-align: left;
}

@keyframes showFast {
  from {
    opacity: 0;
    transform: translateX(25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
