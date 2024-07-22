<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink, RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

</script>

<template>
    <div class="user-name">
        <span>loading</span>
        <span>当前登录用户</span>
        <a href="" class="ml-5">退出</a>
        <RouterLink to="/login">Login</RouterLink>

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
