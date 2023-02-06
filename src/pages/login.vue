<template>
    <div>
        login page
        <div>{{$t("i18n.tips")}}</div>
    </div>
</template>
<script lang="ts" setup>
    import {onMounted} from 'vue'
    import axios from 'axios'

    onMounted(() => {
        axios.get('/api/xxx').then(res => {
            console.log(res);
        })
    })


</script>
