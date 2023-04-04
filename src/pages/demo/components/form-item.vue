<template>
  <div class="formItem">
    <el-input v-if="itemVisible('input')" v-model="value" v-bind="$attrs" class="formItemInput itemRow" :placeholder="placeholder"></el-input>
    <el-select v-if="itemVisible('select')" v-model="value" v-bind="$attrs" class="formItemSelect itemRow" :placeholder="placeholder">
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
  export default {inheritAttrs: false};
</script>
<script setup lang="ts">
  interface Props {
    itemType: "input" | "select"
    modelValue?: string | number
    options?: Array<{ label: string, value: string | number }>
    placeholder?: string
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['input', 'update:modelValue']);
  const value = ref(props.modelValue);
  const itemVisible = (itemType: string): boolean => props.itemType === itemType;
  const placeholder = computed(() => {
    if (props.placeholder) {
      return props.placeholder;
    }
    const placeholderMap = {
      input: '请输入',
      select: '请选择'
    }
    return placeholderMap[props.itemType] || '';
  })

  watch(() => props.modelValue,(val) => value.value = val);
  watch(value, (val) => emit("update:modelValue", val));


</script>

<style scoped lang="scss">
  .formItem {
    .itemRow {
      width: var(--input-width);
    }
  }
</style>
