<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UserName from '@/components/UserName.vue'
</script>

<template>
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/news">News</RouterLink>
    |
    <UserName />

    <RouterView />
  </div>
</template>

<style lang="less" scoped>
.nav {
  background-color: antiquewhite;
  height: 100%;
  text-align: center;
}
</style>
