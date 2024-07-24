<script setup>
import { ref, reactive, computed, onMounted, watch, watchEffect, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();

const store = useStore();
const status = computed(() => store.getters['loginUser/status']);
const user = computed(() => store.state.loginUser.user);

const unwatch = watchEffect(() => {
    console.log('==>', status.value)
    console.log('==>', route.query.returnurl)
    if (status.value !== 'loading') {
        router.push(route.query.returnurl || '/')
            .catch(() => { })
    }
})

onBeforeUnmount(() => {
    unwatch();
})

</script>

<template>
    <div class="container">
        loading
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

container {
    height: 100%;
}
</style>
