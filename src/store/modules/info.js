import { getDatabase, ref, child, get, update } from "firebase/database";

export default {

    getters: {
        info: state => state.info
    },
    state: {
        info: {}
    },
    mutations: {
        SET_INFO(state, info) {
            state.info = info;
        },
        CLEAR_INFO(state) {
            state.info = {};
        },
    },
    actions: {
        async updateInfo({commit, getters}, toUpdate) {
            try {
                const db = getDatabase();
 
                const uid = getters.user.uid;
                const updateData = {...getters.info, ...toUpdate};                      
                const updates = {};
                updates[`users/${uid}/info`] = updateData;
                commit('SET_INFO', updateData);
                return update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e);
                throw e;
            }

        },

        async fetchInfo({commit}, userId) {
            const dbRef = ref(getDatabase());
            await get(child(dbRef, `users/${userId}/info`)).then((data) => {
                if (data.exists()) {
                    commit('SET_INFO', data.val())
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }
}
