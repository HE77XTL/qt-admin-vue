<template>
  <div class="loginPage">
    <div class="formPanel">
      <div class="tab">
        <div @click="tabChange('login')" :class="{active: form.type === 'login'}">登录</div>
        <div @click="tabChange('registry')" :class="{active: form.type === 'registry'}">注册</div>
      </div>
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
    type: 'login'
  });

  const tabChange = (type: string) => {
    form.type = type;
  };

  const submit = () => {
    console.log(22);
    console.log(form);
    const url = form.type === 'login' ? 'http://localhost:8090/login': 'http://localhost:8090/registry'
    axios.post(url, {
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

      .tab {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        cursor: pointer;
        .active {
          color: var(--base-color);
        }
      }
    }
  }

</style>
