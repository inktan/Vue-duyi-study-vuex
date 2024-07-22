export default {
    state: {
        // 定义状态
        count: 963,
        loginUser: {
            loading: false,
            user: null,
        }
    },
    mutations: {
        // 定义突变
        increment(state) {
            state.count++;
        }
    },
    actions: {
        // 定义动作
        increment(context) {
            context.commit('increment');
        }
    },
    getters: {
        // 定义获取器
        doubleCount(state) {
            return state.count * 2;
        }
    }
}
