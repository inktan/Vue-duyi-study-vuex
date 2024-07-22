<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

</script>

<template>
    <h1>新闻列表</h1>
</template>

<style lang="less" scoped>
// @import "./styles/mixin.less";
// @import "./styles/var.less";

.app-container {
    height: 100%;
}
</style>
