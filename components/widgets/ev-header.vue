<template>
  <!--fixed top-0-->
  <header class="flex flex-col items-stretch">

    <div
      class="z-20 bg-transparent top-0 w-full flex items-center justify-between sm:justify-between md:justify-between border-b border-b-gray-700 p-1 sm:p-4 md:pl-11 md:pr-11 z-10 backdrop-blur-sm transition-all text-black md:absolute md:text-red-50">
      <NuxtLink class="move mr-auto ml-1 sm:ml-5 flex justify-center items-center" to="/">
        <img @click="pageisOpen=0" class="select-none w-15 h-8 sm:w-20 sm:h-11 md:w-24 md:h-14"
             src="@/assets/images/logotype-white.png" alt="">
      </NuxtLink>

      <nav class="hidden sm:flex sm:items-center sm:justify-center md:pr-3 md:mr-3 mr-3">
        <ul class="flex text-gray-200">
          <li
            @click="pageisOpen=link.id"
            class="hover:text-gray-500 ml-6 md:ml-3 lg:ml-14 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of navLinks">
            <div :class="{'-rotate-90 text-red-200': pageisOpen === link.id}" class="hidden md:block text-center w-4 h-4 transition-all duration-150 ease-in-out"><</div>
            <NuxtLink class="md:ml-4" :class="{'text-red-200': pageisOpen === link.id}" :to="link.url">
              <h5 class="sm:text-base md:text-lg lg:text-xl">{{ link.title }}</h5>
              <p class="hidden md:block sm:text-xs md:text-sm lg:text-base">{{ link.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <svg class="hidden sm:block w-11 h-11 pl-2 cursor-pointer text-gray-300"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>

      <div class="block sm:hidden flex items-center">
        <svg class=" cursor-pointer w-10 h-10 ml-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>

    </div>
  </header>
</template>

<script>
import {navLinks} from '@/configs/headerConfig';

export default {
  name: "ev-header",

  props: {
    textColor: String
  },

  data() {
    return {
      navLinks,
      pageisOpen: 0,
    }
  },

}
</script>

<style>

</style>
