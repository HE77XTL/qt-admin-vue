<template>
  <div class="autoBreadcrumb">
    <div class="toggleMenuIcon">
      <i v-show="!isCollapse" class="ds-iconfont ds-icon-collapse" @click="onMenuToggle"></i>
      <i v-show="isCollapse" class="ds-iconfont ds-icon-expand" @click="onMenuToggle"></i>
    </div>
    <div>breadcrumb/xx/xx</div>
  </div>
</template>
<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {menu} from '../pinia/menu';

  const menuStore = menu();
  const {isCollapse} = storeToRefs(menuStore);


  const onMenuToggle = () => {
    menuStore.toggleCollapseStatus();
  };

</script>

<style scoped lang="scss">
  .autoBreadcrumb {
    display: flex;
    align-items: center;
    padding-left: 4px;

    .toggleMenuIcon {
      margin-right: 10px;
      cursor: pointer;
      .ds-iconfont {
        font-size: 12px;
      }
    }
  }
</style>
