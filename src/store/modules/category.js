import { getDatabase, /*set,*/ ref, child, push, get, update } from "firebase/database";

export default {

    getters: {
        categories(state) {
            return state.categories;
        }
    },
    state: {
        categories: [],
        error: ''
    },
    mutations: {
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        UPDATE_CATEGORIES(state, payload) {
            state.categories = payload;
        }
    },
    actions: {
        async getCategories({commit, getters}) {
            const dbRef = ref(getDatabase());
            const uid = getters.user.uid;            
            await get(child(dbRef, `users/${uid}/categories`)).then((data) => {
                if (data.exists()) {
                    const categories = data.val()
                    const categoriesArray = Object.keys(categories).map(key => ({...categories[key], id: key}))
                    commit('UPDATE_CATEGORIES', categoriesArray);
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        },

        async createCategory({commit, getters}, {title, limit}) {
            try {            
                const db = getDatabase();
                
                const uid = getters.user.uid; 
                const catId = push(child(ref(db), `users/${uid}/categories`)).key;
                const category = {
                    title: title,
                    limit: limit,
                };           
                const updates = {};
                updates[`users/${uid}/categories/${catId}`] = category;

                return await update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }
        },

        async updateCategory({commit, getters}, {id, title, limit}) {
            try {              
                const db = getDatabase();

                const uid = getters.user.uid;  
                const category = {
                    title: title,
                    limit: limit,
                };          
                const updates = {};
                updates[`users/${uid}/categories/${id}`] = category;

                return update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }                
        }        
    }
}
