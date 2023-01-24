<template>
  <div>
    <h1>Главная страница</h1>
    <NuxtLink to="/services">Услуги</NuxtLink>
    <NuxtLink to="/experience">Опыт компании</NuxtLink>
    <NuxtLink to="/about">О нас</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
