<script setup lang="ts">
  import {vantThemeVars} from './vantTheme/vantTheme';
</script>

<template>
  <van-config-provider :theme-vars="vantThemeVars">
    <div>
      <router-view/>
    </div>
  </van-config-provider>
</template>

<style>

</style>
