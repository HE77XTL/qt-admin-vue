<template>
  <div class="indexLayout" :class="{ menuCollapse: menuStore.isCollapse }">
    <div class="layoutHeader">
      <IndexHeader></IndexHeader>
    </div>
    <div class="layoutTab">
      <IndexTab tabs=""></IndexTab>
    </div>

    <div class="layoutMenu">
      <el-scrollbar>
        <div class="menuWrap">
          <IndexMenu></IndexMenu>
        </div>
      </el-scrollbar>
    </div>
    <div class="layoutContent">
      <div>{{keepAliveComponents}}</div>
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="keepAliveComponents">
          <component :is="Component" ref="indexRouterView"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
  interface TabInterface {
    componentName: string,
    showName: string,
    path?: string
  }

  import {menu} from '../pinia/menu';
  import IndexMenu from './index-components/index-menu.vue';
  import IndexHeader from './index-components/index-header.vue';
  import IndexTab from './index-components/index-tab.vue';


  const menuStore = menu();
  const {isCollapse} = storeToRefs(menuStore);

  const indexRouterView = ref(null);
  const tabs: Array<TabInterface> = reactive([]);
  const breadcrumb = ref([]);

  const keepAliveComponents = computed(() => tabs.map(k => {
    return k.componentName;
  }));

  const route = useRoute();
  watch(
      () => route.name,
      (val: string) => {
        nextTick(() => {
          breadcrumb.value = indexRouterView.value.breadcrumb;

          if (keepAliveComponents.value.includes(val)) {
            return;
          }
          if (tabs.length >= 6) {
            tabs.shift();
          }
          tabs.push({
            componentName: val,
            showName: breadcrumb.name,
            path: breadcrumb.path
          });
        });
      }
  );


</script>

<style scoped lang="scss">
  $headerHeight: 60px;
  $tabHeight: 22px;
  $contentTopPad: $headerHeight + $tabHeight;
  $menuWidth: 200px;
  $menuTransitionTime: 0.7s;

  .indexLayout {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
    padding-top: $contentTopPad;
    padding-left: $menuWidth;
    transition: padding-left $menuTransitionTime;
    background: var(--base-gray);

    .layoutHeader, .layoutMenu, .layoutTab {
      position: absolute;
      z-index: 1;
    }

    .layoutHeader {
      top: 0;
      left: 0;
      right: 0;
      height: $headerHeight;
      background-image: linear-gradient(to right top, #1c2b36, #1a323e, #153946, #0d404d, #004853);
      color: white;
    }

    .layoutTab {
      top: $headerHeight;
      left: $menuWidth;
      right: 0;
      height: $tabHeight;
      font-size: 12px;
      overflow-y: hidden;
      overflow-x: auto;
      background: white;
      color: var(--base-text);
      display: flex;
      align-items: center;
      transition: left $menuTransitionTime;

    }

    .layoutMenu {
      top: $headerHeight;
      bottom: 0;
      left: 0;
      width: $menuWidth;
      overflow-x: hidden;
      overflow-y: auto;
      transition: width $menuTransitionTime;
      background-image: linear-gradient(to right bottom, #1c2b36, #1a323e, #153946, #0d404d, #004853);
      color: white;

      .menuWrap {
        width: $menuWidth;
      }
    }

    .layoutContent {
      height: 100%;
      overflow: auto;
      color: var(--base-text);
    }

    &.menuCollapse {
      padding-left: 0;

      .layoutMenu {
        width: 0;
      }

      .layoutTab {
        left: 0;
      }
    }
  }
</style>
