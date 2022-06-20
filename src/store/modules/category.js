import { getDatabase, set, ref } from "firebase/database";

export default {

    getters: {

    },
    state: {
        error: ''
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
                const db = getDatabase();                

                await set(ref(db, `users/${uid}/categories`), {
                    title,
                    limit
                })
                .then((res) => {
                    console.log(res);
                })  

                //return {title, limit, id: category.key}              
            } catch(e) {
                commit('SET_ERROR', e)
                throw e
            }
        }
    }
}
