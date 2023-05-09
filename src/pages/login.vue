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
  import {getApiTest2} from '@vServe';

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
