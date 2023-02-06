import {defineStore} from 'pinia';
import {ref} from 'vue';

export const menu = defineStore('menu', () => {
    const isCollapse = ref(false);

    function toggleCollapseStatus() {
        isCollapse.value = !isCollapse.value
    }

    return {isCollapse, toggleCollapseStatus}

});
