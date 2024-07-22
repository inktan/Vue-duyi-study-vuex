import { createStore } from 'vuex';
import loginUser from './loginUser';
import counter from './counter';

export default createStore({
    modules: {
        loginUser,
        counter,
    },
    strict: true,

});
