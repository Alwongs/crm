import { createStore } from 'vuex'
import user from '@/store/modules/user'
import info from '@/store/modules/info'

export default createStore({
    modules: {
        user,
        info
    },
});
