<template>
  <div class="loginPage">
    <div class="formPanel">
      <div>注册</div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"/>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted} from 'vue';
  import axios from 'axios';

  const form = reactive({
    name: "",
    password: "",
    roleId: 1,
  });


  onMounted(() => {

  });

  const submit = () => {
    console.log(22);
    console.log(form);
    axios.post('http://localhost:8090/registry', {
      ...form
    }).then(res => {
      console.log(res);
    });

  };


</script>

<style lang="scss" scoped>
  .loginPage {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .formPanel {
      padding: 20px;
      width: 400px;
      border: 1px solid #cccccc;
    }
  }

</style>
