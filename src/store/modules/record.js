import { getDatabase, ref, push, get, child, update } from "firebase/database";

export default {

    getters: {
        records(state) {
            return state.records;
        }
    },
    state: {
        records: [],
        error: ''
    },
    mutations: {
        UPDATE_RECORDS(state, payload) {
            state.records = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
    },
    actions: {
        async getRecords({commit, getters}) {
            const dbRef = ref(getDatabase());
            const uid = getters.user.uid;            
            await get(child(dbRef, `users/${uid}/records`)).then((data) => {
                if (data.exists()) {
                    const records = data.val()
                    const recordsArray = Object.keys(records).map(key => ({...records[key], id: key}))
                    commit('UPDATE_RECORDS', recordsArray);
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        },


        async createRecord({commit, getters}, record) {
            try {            
                const db = getDatabase();
                
                const uid = getters.user.uid; 
                const recordId = push(child(ref(db), `users/${uid}/records`)).key;         
                const updates = {};
                updates[`users/${uid}/records/${recordId}`] = record;

                return await update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }
        },      
    }
}
