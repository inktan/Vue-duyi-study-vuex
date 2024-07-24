<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

const status = computed(() => store.getters['loginUser/status']);
const user = computed(() => store.state.loginUser.user);

const handleLoginOut = async function () {
    const resp = await store.dispatch('loginUser/loginOut')
    router.push('/login');
}
</script>

<template>
    <div class="user-name">
        <span v-if="status === 'loading'">loading</span>
        <template v-else-if="status === 'login'">
            <RouterLink to="/user">{{ user.name }}</RouterLink>
            <a href="" @:click.prevent="handleLoginOut" class="ml-5">退出</a>
        </template>
        <RouterLink v-else to="/login">Login</RouterLink>
    </div>
</template>

<style lang="less" scoped>
// @import "./styles/mixin.less";
// @import "./styles/var.less";

.user-name {
    // height: 100%;
    display: inline-block;

    a,
    span {
        margin-left: 15px;
    }
}
</style>
