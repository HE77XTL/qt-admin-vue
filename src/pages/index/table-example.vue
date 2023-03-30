<template>
  <auto-table-page>
    <template #breadcrumb>
      <div style="border: 1px solid">
        breadcrumb
      </div>
    </template>
    <template #search>
      <div style="border: 1px solid">
        search
      </div>
    </template>
    <template #table>
      <div style="border: 1px solid">
        content
      </div>
    </template>

  </auto-table-page>
</template>

<script setup name="index-table-example">
  console.log('table')
</script>

<style lang="scss" scoped>
  .tableExample {

  }
</style>
