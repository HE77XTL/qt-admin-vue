<template>
  <div class="heds">
    index---heds -- page
  </div>
</template>
<script setup name="index-heds">
  defineExpose({
    breadcrumb: {
      path: '/heds',
      title: 'heds中文',
    }
  })

</script>
<style scoped lang="scss">
  .heds {
    width: 2000px;
    height: 3000px;
  }
</style>
