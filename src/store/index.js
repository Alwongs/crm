import { createStore } from 'vuex'
import auth from './modules/auth'
import info from './modules/info'
import helper from './modules/helper'

export default createStore({
    modules: {
        auth,
        info,
        helper
    }
})
