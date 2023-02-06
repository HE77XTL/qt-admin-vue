<template>
    <div class="autoBreadcrumb">
        <div class="toggleMenuIcon">
            <i class="ds-iconfont ds-icon-daohang"></i>
        </div>
        <div>breadcrumb/xx/xx</div>
        <div>{{menuStore.isCollapse}}</div>
    </div>
</template>
<script setup lang="ts">
    import {menu} from '../pinia/menu'

    const menuStore = menu();
    const onMenuToggle = () => {
        menuStore.toggleCollapseStatus()
    }

</script>

<style scoped lang="less">
    .autoBreadcrumb {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;

        .toggleMenuIcon {
            margin-right: 10px;
        }
    }
</style>
