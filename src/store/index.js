import { createStore } from 'vuex'
import user from '@/store/modules/user'
import info from '@/store/modules/info'
import helper from '@/store/modules/helper'
import currency from '@/store/modules/currency'
import food from '@/store/modules/food'

export default createStore({
    modules: {
        user,
        info,
        helper,
        currency,
        food
    },
});
