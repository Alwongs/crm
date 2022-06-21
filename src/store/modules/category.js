import { getDatabase, set, ref } from "firebase/database";

export default {

    getters: {

    },
    state: {

    },
    mutations: {
        SET_ERROR(state, payload) {
            state.error = payload;
        }
    },
    actions: {
        async createCategory({commit, getters}, {title, limit}) {
            try {
                const uid = getters.user.uid;
                const categoryId = Date.now();
                const db = getDatabase();                

                await set(ref(db, `users/${uid}/categories/${categoryId}`), {
                    title,
                    limit
                })  

                //return {title, limit, id: category.key}              
            } catch(e) {
                commit('SET_ERROR', e)
                throw e
            }
        }
    }
}
