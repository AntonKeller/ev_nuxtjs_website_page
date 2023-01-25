<template>
  <!--  fixed top-0-->
  <header
    :class="textColor"
    class="z-10 h-18 md:h-28 md:absolute backdrop-blur-sm shadow-inner sm:left-0 sm:right-0 sm:top-0 w-full flex items-center justify-between transition-all border-b border-b-red-800 text-black md:text-red-50 md:text-md p-2 sm:p-4 md:pr-6 md:pl-6 lg:pr-16 lg:pl-16">

    <div class=" hidden md:block absolute top-1.5 right-1.5 w-auto flex text-xs text-black md:text-gray-50">
      <div :class="textColor" class="md:border md:rounded-xl border-l-gray-300 pl-3 pr-3 pt-1 pb-1">+7 (999)-500-50-50</div>
    </div>

    <NuxtLink to="/">
      <img class="select-none w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16" src="../assets/images/logotype.png" alt="">
    </NuxtLink>

    <div class="hidden sm:flex h-6">
      <nav class="flex items-center">
        <ul class="flex">

          <li class="list__item hover:text-gray-300 flex items-center">
            <div
              class="hidden md:block hover:-rotate-90 transition-transform cursor-pointer text-center w-7 h-7 border-gray-300 border rounded-2xl ">
              <
            </div>
            <NuxtLink
              class="ml-4 md:pb-2.5"
              to="/services">
              <h5 class="sm:text-md lg:text-lg ">Услуги</h5>
              <p class="hidden md:block sm:text-xs lg:text-xs">множество услуг</p>
            </NuxtLink>
          </li>

          <li class="list__item hover:text-gray-300 flex items-center ml-10 lg:ml-14">
            <div
              class="hidden md:block hover:-rotate-90 transition-transform cursor-pointer text-center w-7 h-7 border-gray-300 border rounded-2xl ">
              <
            </div>
            <NuxtLink
              class="ml-4 md:pb-2.5"
              to="/experience">
              <h5 class="sm:text-md lg:text-lg">Опыт компании</h5>
              <p class="hidden md:block sm:text-xs lg:text-xs">лидер оценки</p>
            </NuxtLink>
          </li>

          <li class="list__item hover:text-gray-300 flex items-center ml-10 lg:ml-14">
            <div
              class="hidden md:block hover:-rotate-90 transition-transform cursor-pointer text-center w-7 h-7 border-gray-300 border rounded-2xl ">
              <
            </div>
            <NuxtLink
              class="ml-4 md:pb-2.5"
              to="/about">
              <h5 class="sm:text-md lg:text-lg">О нас</h5>
              <p class="hidden md:block sm:text-xs lg:text-xs">Юридическая информация</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="cursor-pointer sm:text-md md:pb-2.5 lg:text-lg ml-6 pl-4 border-l border-l-rose-200">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
        </svg>
      </div>

    </div>

    <div class="block sm:hidden flex items-center">

      <svg class="cursor-pointer w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>

      <svg class="cursor-pointer w-10 h-10 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>

    </div>

  </header>
</template>

<script>
export default {
  name: "ev-header",
  props: {
    textColor: String,
  },
}
</script>

<style scoped>
  .ev-color-black{
    @apply text-black !important;
  }

  .ev-border-black{
    @apply border-black !important;
  }

  .ev-border-l-black{
    @apply border-l-black !important;
  }
</style>
