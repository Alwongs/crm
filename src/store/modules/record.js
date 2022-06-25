import { getDatabase, ref, push, child, update } from "firebase/database";

export default {

    getters: {

    },
    state: {
        error: ''
    },
    mutations: {
        SET_ERROR(state, payload) {
            state.error = payload;
        },
    },
    actions: {

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
