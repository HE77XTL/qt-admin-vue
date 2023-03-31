<template>
  <div class="indexTab">
    <auto-breadcrumb></auto-breadcrumb>
    <div style="display: flex">
      <div v-for="tab in tabs" :key="tab.componentName">{{tab.title}} 77--</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps(['tabs']);

  const breadcrumb = ref({});

</script>

<style lang="scss" scoped>
  .indexTab {}
</style>
