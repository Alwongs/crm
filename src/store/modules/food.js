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
        async createFood( _, data ) {
            const {title, energy, protein, fat, carb} = data;    
            const foodId = Date.now();
            const db = getDatabase();

            await set(ref(db, `food/${foodId}`), {
                title,
                energy,
                protein,
                fat,
                carb
            });
        },

        async fetchFood({commit}) {
            const dbRef = ref(getDatabase());
            await get(child(dbRef, `food`)).then((data) => {
                if (data.exists()) {
                    commit('UPDATE_FOOD', data.val())
                } else {
                    alert("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }
}
