<template>
    <div class="indexLayout" :class="{menuCollapse: menuStore.isCollapse}">
        <div class="layoutHeader">
            <IndexHeader></IndexHeader>
        </div>
        <div class="layoutMenu">
            <div class="menuWrap">
                <IndexMenu></IndexMenu>
            </div>
        </div>
        <div class="layoutContent">
            <router-view></router-view>
        </div>
        <div class="menuOperateIconWrap" @click="onMenuToggle">
            <i v-show="isCollapse" class="ds-iconfont ds-icon-menu-expand menuOperate"/>
            <i v-show="!isCollapse" class="ds-iconfont ds-icon-menu-fold menuOperate"/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {menu} from '../pinia/menu';
    import IndexMenu from './index-components/index-menu.vue';
    import IndexHeader from './index-components/index-header.vue';

    const menuStore = menu();
    const {isCollapse} = storeToRefs(menuStore);

    const onMenuToggle = () => {
        menuStore.toggleCollapseStatus()
    }

</script>

<style scoped lang="less">
    @headerHeight: 60px;
    @menuWidth: 200px;
    @menuTransitionTime: 0.7s;

    .indexLayout {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        position: relative;
        padding-top: @headerHeight;
        padding-left: @menuWidth;
        transition: padding-left @menuTransitionTime;

        .layoutHeader, .layoutMenu {
            position: absolute;
        }

        .layoutHeader {
            top: 0;
            left: 0;
            right: 0;
            height: @headerHeight;
            border-bottom: 1px solid #ddd;
        }

        .layoutMenu {
            top: @headerHeight;
            bottom: 0;
            left: 0;
            width: @menuWidth;
            border: 1px solid #ddd;
            overflow-x: hidden;
            overflow-y: auto;
            transition: width @menuTransitionTime;

            .menuWrap {
                width: @menuWidth;
            }
        }

        .layoutContent {
            height: 100%;
            overflow: auto;
        }

        .menuOperateIconWrap {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: calc(@menuWidth - 10px);
            transform: translateY(-50%);
            transition: left @menuTransitionTime;

            .menuOperate {
                font-size: 32px;
                cursor: pointer;
            }

        }

        &.menuCollapse {
            padding-left: 0;

            .layoutMenu {
                width: 0;
            }

            .menuOperateIconWrap {
                left: 0;
            }
        }
    }
</style>
