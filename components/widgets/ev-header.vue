<template>
  <!--  fixed top-0-->
  <header
    :class="textColor"
    class="z-10 h-18 md:h-28 md:absolute backdrop-blur-sm shadow-inner sm:left-0 sm:right-0 sm:top-0 w-full flex items-center justify-between transition-all border-b border-b-gray-400 text-black md:text-red-50 md:text-md p-2 sm:p-4 md:pl-11 md:pr-11">

    <div class=" hidden md:block absolute top-1 right-0 w-auto flex text-xs text-black md:text-gray-300">
      <div :class="textColor" class="pl-3 pr-3 pt-1 pb-1">+7 (999)-500-50-50</div>
    </div>

    <NuxtLink to="/">
      <img class="translate-x-1/4 select-none w-21 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16"
           src="../../assets/images/logotype.png" alt="">
    </NuxtLink>

    <div class="hidden sm:flex items-center" @mouseover="menuVisibleHandler">
      <nav class="flex items-center">
        <ul class="flex text-gray-300">
          <li
            class="hover:text-gray-400 ml-10 lg:ml-14 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of links">
            <div class="hidden md:block -rotate-90 text-center w-5 h-5"> <</div>
            <NuxtLink class="ml-4 md:pb-2.5"
                      :to=link.url>
              <h5 class="sm:text-md lg:text-lg ">{{ link.title }}</h5>
              <p class="hidden md:block sm:text-xs lg:text-xs">{{ link.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <svg class="w-9 h-9 ml-3 pl-3 border-l border-l-gray-400 cursor-pointer"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    </div>

    <div class="block sm:hidden flex items-center">

      <svg class=" rounded-2xl cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>


      <svg class=" cursor-pointer w-10 h-10 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>

    </div>

  </header>
</template>

<script>
import {links} from '@/configs/headerConfig';

export default {
  name: "ev-header",

  props: {
    textColor: String,
    menuIsVisible: Boolean
  },

  data() {
    return {
      links,
    }
  },

  methods: {
    menuVisibleHandler() {
      this.$emit('menuVisibleHandler');
    }
  }

}
</script>

<style>

</style>
