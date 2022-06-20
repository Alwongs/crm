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
        async createFood( {commit}, data ) {

            const db = getDatabase();                

            const res = await set(ref(db, 'foods/123/info'), {
                name: data.name,
                energy: data.energy
            });
            console.log(res)
            commit('UPDATE_FOOD', res)
        }
    }
}
