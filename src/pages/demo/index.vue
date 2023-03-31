<template>
  <div>
    <FormItem type="input" v-model="aValue"></FormItem>
  </div>
</template>
<script setup lang="ts">
  interface demoFormInterface {
    name: string
    gender?: string
    married?: boolean
  }

  import FormItem from './components/form-item.vue';

  const aValue = ref('321312');
  const bValue = ref('');
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
