<template>
  <div class="demoPage">
    <FormItem itemType="input" v-model="aValue" class="parentDefineClassTets"></FormItem>
    <FormItem itemType="select" v-model="bValue" :options="bOptions" class="parentDefineClassTets"></FormItem>
  </div>
</template>
<script setup lang="ts">
  import FormItem from './components/form-item.vue';

  interface demoFormInterface {
    name: string
    gender?: string
    married?: boolean
  }


  const aValue = ref('defaultInput');
  const bValue = ref('apple');
  const bOptions = [
    {
      label: '苹果',
      value: 'apple'
    },
    {
      label: '香蕉',
      value: 'banana'
    }
  ];
</script>

<style scoped lang="scss">
  .demoPage {
    padding: 20px;

    > div {
      margin: 10px;
    }
  }
</style>
