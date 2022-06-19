//import { getDatabase, set, ref } from "firebase/database";

export default {

    getters: {

    },
    state: {

    },
    mutations: {

    },
    actions: {
        createFood( context, data ) {
            console.log(context)
            console.log(data)
            //console.log(name)
            //console.log(energy)
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
