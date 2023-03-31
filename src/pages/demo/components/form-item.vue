<template>
  <div>
    <el-input v-model="value" @input="onInput"></el-input>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps(['value', 'modelValue']);
  const emit = defineEmits(['input', 'update:modelValue']);
  const value = ref(props.modelValue);
  const onInput = (val: string) => {
    emit("update:modelValue", val);
    emit("input", val);
  };
  watch(
      () => props.modelValue,
      (val: string) => {
        value.value = val;
      }
  );
</script>
