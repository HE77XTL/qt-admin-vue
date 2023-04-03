<template>
  <div class="unitTestDemo">
    <div class="test-utils-value">值为：{{ num }}</div>
    <el-button class="test-utils-button" @click="increment">测试按钮</el-button>
    <div class="box">
      scss test
    </div>
  </div>
</template>

<script setup lang="ts">
  const num: Ref<number> = ref(1);

  function increment() {
    num.value++;
  }
</script>

<style lang="scss" scoped>
  .unitTestDemo {
    text-align: center;
    .box {
      color: #b3d4fc;
    }
  }
</style>
