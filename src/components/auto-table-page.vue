<template>
  <div class="autoTablePage">
    <div class="searchWrap tableBox">
      <slot name="search"></slot>
    </div>
    <div class="operateWrap tableBox">
      <slot name="operate"></slot>
    </div>
    <div class="tableWrap tableBox">
      <slot name="table"></slot>
    </div>
    <div class="paginationWrap tableBox">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  .autoTablePage {
    background: var(--base-gray);
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .tableBox {
      background: white;
    }

    .breadcrumbWrap, .searchWrap, .operateWrap, .paginationWrap {
      flex-shrink: 0;
    }
    .tableWrap {
      flex: 1;
    }


  }
</style>
