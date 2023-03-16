<template>
  <div class="mainMenu">
    <el-menu
        default-active="4"
        class="el-menu-vertical-demo">
      <template v-for="item in menu" :key="item.id">
        <el-sub-menu v-if="Array.isArray(item.children)" :index="item.id">
          <template #title>
            <span>{{ item.name }}</span>
          </template>
          <!--          只做两层，菜单嵌套层数过多体验不好， 如有这样的需求产品应重新考虑展现形式， 例如头部菜单等-->
          <el-menu-item v-for="subItem in item.children" :index="subItem.id" :key="subItem.id"
                        @click="onMenuClick(subItem)">
            <span>{{ subItem.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.id" @click="onMenuClick(item)">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  import {menu, MenuItemInterface} from './menu';

  const router = useRouter();

  const onMenuClick = (data: MenuItemInterface) => {
    data.url && router.push({
      path: data.url
    });
  };
</script>

<style scoped lang="scss">
  .mainMenu {
    :deep(.el-menu) {
      border-right: none;

      .el-menu-item {
        &.is-active {
          background: var(--light-color-2);
        }
      }

      .el-menu-item, .el-sub-menu__title {
        border-bottom: 1px solid var(--dark-color-1);
      }

    }
  }
</style>
