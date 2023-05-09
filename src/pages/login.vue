<template>
  <div class="loginPage">
    <div>报备小程序</div>
    <van-button type="primary" @click="submit">主要按钮</van-button>
  </div>
</template>
<script lang="ts" setup>
  import {getApiTest2} from '@vServe';



  const submit = () => {

    getApiTest2({}).then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });

  };


</script>

<style lang="scss" scoped>
  .loginPage {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    font-size: 14px;
  }

</style>
