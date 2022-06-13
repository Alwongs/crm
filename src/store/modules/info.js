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
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            
            const dbRef = ref(getDatabase()); 
            const uid = await dispatch('getUid');
            console.log('uid')
            await get(child(dbRef, `users/${uid}/info`)).then((data) => {
                if (data.exists()) {
                    console.log(data.val());
                    commit('SET_INFO', data.val())
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    },

}