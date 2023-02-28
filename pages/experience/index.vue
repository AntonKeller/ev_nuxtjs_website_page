<template>
  <div class="bg">
    <div class="h-screen w-screen flex flex-col justify-center items-center">

      <div
        class="basis-3/12 w-10/12 font-bold hidden md:flex flex-row items-end text-gray-300 text-lg uppercase h-full md:pt-24">
        <div
          v-for="tab of tabs"
          :key="tab.id"
          :style="{animationDuration: 0.5 + tab.id / 10 + 's'}"
          @click.left="activeTab = tab.id"
          :class="{'backdrop-brightness-75': activeTab === tab.id}"
          class="text-center border-t border-t-gray-600 lg:text-xl tab-transition duration-300 hover:backdrop-brightness-75 cursor-pointer border-b border-b-gray-600 p-6 w-full">
          {{ tab.value }}
        </div>
      </div>

      <div class="basis-9/12 w-10/12 h-screen flex flex-row flex-wrap justify-center items-center overflow-y-scroll md:pt-10">
        <img
          v-for="logotype of logotypes"
          :key="logotype.id"
          :style="{animationDuration: 0.7 + logotype.id / 10 + 's'}"
          :src="require(`./../../assets/experience_logotypes/${logotype.name}.png`)"
          class="hover:opacity-50 img-animate p-4 object-contain object-center"
          alt="no image">
      </div>

    </div>
  </div>

</template>

<script>

import {tabs, logotypes} from "@/configs/experience"

export default {

  name: "experience",

  methods: {},

  mounted() {
    // setInterval(() => {
    //   if (this.tabs.length === this.activeTab) this.activeTab = 0
    //
    //   this.activeTab += 1;
    //
    // }, 1000);
  },

  data() {
    return {
      tabs: tabs,
      logotypes: logotypes,
      activeTab: 0,
    }
  }

}
</script>

<style scoped>

.tab-transition {
  animation: show-tab ease;
}

@keyframes show-tab {
  from {
    opacity: 0;
    transform: translateY(-100vh);
  }
}

.bg {
  background: url("assets/background/f-10.png") transparent no-repeat center / cover;
}

.img-animate {
  animation: show ease;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateX(100vw);
  }
}
</style>
