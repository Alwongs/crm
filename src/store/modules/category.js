import { getDatabase, set, ref, child, get } from "firebase/database";

export default {

    getters: {
        categories(state) {
            return state.categories;
        }
    },
    state: {
        categories: {},
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
        async createCategory({commit, getters}, {title, limit}) {
            try {
                const uid = getters.user.uid;
                const categoryId = Date.now();
                const db = getDatabase();                

                await set(ref(db, `users/${uid}/categories/${categoryId}`), {
                    title,
                    limit
                });            
            } catch(e) {
                commit('SET_ERROR', e)
                throw e
            }
        },
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
        }
    }
}
