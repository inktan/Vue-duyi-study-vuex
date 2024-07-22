<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

const loginId = ref('');
const loginPwd = ref('');
// const loading = ref(false);

// 访问 state
// const loading = computed(() => store.state.loginUser.loading);

// 访问 getters
// const doubleCount = computed(() => store.getters.doubleCount);

// 调用 actions
// const increment = () => {
//   store.dispatch('increment');
// };

const handleSubmit = function () {
  console.log("登录", loginId.value, loginPwd.value)
  // console.log(loading.value)
  // increment()
  console.log(store.state.loginUser.loading)
  store.commit('loginUser/setLoading', true)
  console.log(store.state.loginUser.loading)

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
