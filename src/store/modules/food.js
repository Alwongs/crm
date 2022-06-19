//import { getDatabase, set, ref } from "firebase/database";

export default {

    getters: {

    },
    state: {

    },
    mutations: {

    },
    actions: {
        async createFood( data ) {
            const { name, energy } = data;
            console.log(name)
            console.log(energy)
            /*
            const db = getDatabase();                

            await set(ref(db, 'foods/123/info'), {
                name: data.name,
                energy: data.energy
            });
            */
        }
    }
}
