import { getDatabase, ref, child, get } from "firebase/database";

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
