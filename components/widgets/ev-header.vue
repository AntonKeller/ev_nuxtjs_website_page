<template>
  <!--fixed top-0-->
  <header
    class="overflow-hidden bg-transparent top-0 w-full flex items-center justify-between sm:justify-between md:justify-between p-1 sm:p-4 md:pl-11 md:pr-11 z-10 backdrop-blur-sm transition-all border-b border-b-gray-600 text-black md:absolute md:text-red-50">

    <NuxtLink class="move mr-auto ml-1 sm:ml-5 flex justify-center items-center" to="/">
      <img class="select-none w-15 h-8 sm:w-20 sm:h-11 md:w-24 md:h-14"
           src="@/assets/images/logotype-white.png" alt="">
    </NuxtLink>

    <!--navbar-->
    <div class="hidden sm:flex items-center" @mouseover="menuVisibleHandler">

      <nav class=" lex items-center justify-center md:pr-3 md:mr-3 mr-3">
        <ul class="flex text-gray-200">
          <li
            class="hover:text-gray-300 ml-6 md:ml-3 lg:ml-14 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of links">
            <div class="hidden md:block -rotate-90 text-center w-4 h-4"> <</div>
            <NuxtLink class="md:ml-4"
                      :to=link.url>
              <h5 class="sm:text-base md:text-lg lg:text-xl">{{ link.title }}</h5>
              <p class="hidden md:block sm:text-xs md:text-sm lg:text-base">{{ link.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <svg class="hidden sm:block w-11 h-11 pl-2 cursor-pointer text-gray-300"
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
    </svg>

    <div class="block sm:hidden flex items-center">

      <!--      <svg class=" rounded-2xl cursor-pointer w-8 h-8 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"-->
      <!--           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">-->
      <!--        <path stroke-linecap="round" stroke-linejoin="round"-->
      <!--              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>-->
      <!--      </svg>-->

      <svg class=" cursor-pointer w-10 h-10 ml-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>

    </div>

    <!--    <div class=" hidden md:block absolute top-1 right-0 w-auto flex text-xs text-black md:text-gray-300">-->
    <!--      <div class="pl-3 pr-3 pt-1 pb-1">+7 (999)-500-50-50</div>-->
    <!--    </div>-->

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
header {
  /*background: url("assets/fones/f-3.png") no-repeat;*/
  /*background-size: cover;*/
  /*background-position: center;*/
}

/*@keyframes move {*/
/*  from {*/
/*    margin-left: 0;*/
/*  }*/
/*  25% {*/
/*    transform: translateX(-1px);*/
/*    transform: translateY(-1px);*/
/*  }*/
/*  50% {*/
/*    transform: translateX(-1px);*/
/*    transform: translateY(1px);*/
/*  }*/
/*  75% { */
/*    transform: translateX(1px);*/
/*    transform: translateY(1px);*/
/*  }*/
/*  100% {*/
/*    transform: translateX(1px);*/
/*    transform: translateY(-1px);*/
/*  }*/
/*}*/

/*.move {*/
/*  animation-direction: alternate;*/
/*  animation-duration: 2s;*/
/*  animation-name: move;*/
/*  animation-iteration-count: infinite;*/
/*  animation-timing-function: linear;*/
/*}*/
</style>
