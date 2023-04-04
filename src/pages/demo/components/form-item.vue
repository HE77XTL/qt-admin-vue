<template>
  <div class="formItem">
    <el-input v-if="itemVisible('input')" v-model="value" v-bind="$attrs" class="formItemInput itemRow">
    </el-input>
    <el-select v-if="itemVisible('select')" v-model="value" v-bind="$attrs" class="formItemSelect itemRow">
      <el-option
          v-for="item in props.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false
  };
</script>
<script setup lang="ts">
  const props = defineProps(['type', 'modelValue', 'options']);
  const emit = defineEmits(['input', 'update:modelValue']);
  const value = ref(props.modelValue);

  const itemVisible = (type: string): boolean => type === props.type;

  watch(
      () => props.modelValue,
      (val: string) => {
        value.value = val;
      }
  );

  watch(value, (val: string) => emit("update:modelValue", val));


</script>

<style scoped lang="scss">
  .formItem {
    .itemRow {
      width: 280px;
    }
  }
</style>
