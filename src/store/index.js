import { createStore } from 'vuex'
import user from '@/store/modules/user'
import info from '@/store/modules/info'
import helper from '@/store/modules/helper'
import currency from '@/store/modules/currency'
import food from '@/store/modules/food'
import category from '@/store/modules/category'
import record from '@/store/modules/record'

export default createStore({
    modules: {
        user,
        info,
        helper,
        currency,
        food,
        category,
        record
    },
});
