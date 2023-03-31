<template>
  <div class="demoPage">
    <div>{{aValue}}</div>
    <div>{{bValue}}</div>
    <FormItem type="input" v-model="aValue" class="parentDefineClassTets"></FormItem>
    <FormItem type="select" v-model="bValue" :options="bOptions" class="parentDefineClassTets"></FormItem>
  </div>
</template>
<script setup lang="ts">
  interface demoFormInterface {
    name: string
    gender?: string
    married?: boolean
  }

  import FormItem from './components/form-item.vue';

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
    >div {
      margin: 10px;
    }
  }
</style>
