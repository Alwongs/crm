import { getDatabase, set, ref } from "firebase/database";

export default {

    getters: {

    },
    state: {
        food: {}
    },
    mutations: {
        UPDATE_FOOD(state, food) {
            state.food = food;
        }
    },
    actions: {
        async createFood( _, {title, energy} ) {

            const db = getDatabase();    
            
            const foodId = Date.now();

            await set(ref(db, `food/${foodId}`), {
                title,
                energy
            });
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
