<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

const loginId = ref('')
const loginPwd = ref('')
// 创建计算属性来简化对 Vuex 模块状态的访问
const loading = computed(() => store.state.loginUser.loading);
const user = computed(() => store.state.loginUser.user);
const status = computed(() => store.getters['loginUser/status']);

const handleSubmit = async function () {

  // 从vuex module namespace中与数据的交互模式
  const resp = await store.dispatch('loginUser/login', { loginId: loginId.value, loginPwd: loginPwd.value })
  if (resp) {
    const path = route.query.returnurl || '/'
    router.push(path);
  } else {
    alert('账号 或者 密码错误')
  }

}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId">
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd">
    </div>
    <div class="form-item">
      <label></label>
      <button :disable="loading">{{ loading ? "loading..." : "登录" }}</button>
    </div>
  </form>
</template>

<style lang="less" scoped>
// @import "./styles/mixin.less";
// @import "./styles/var.less";

.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;

  text-align: center;
}
</style>
