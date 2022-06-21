import { getDatabase, set, ref, child, get } from "firebase/database";

export default {

    getters: {
        foods(state) {
            return state.foods;
        }
    },
    state: {
        foods: {}
    },
    mutations: {
        UPDATE_FOOD(state, foods) {
            state.foods = foods;
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

        async fetchFood({commit}) {
            const dbRef = ref(getDatabase());
            await get(child(dbRef, `food`)).then((data) => {
                if (data.exists()) {
                    commit('UPDATE_FOOD', data.val())
                    console.log(data.val())
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }
}
