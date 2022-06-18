export default {

    getters: {
        currency(state) {
            return state.currency
        }
    },
    state: {
        currency: {}
    },
    mutations: {
        UPDATE_CURRENCY(state, payload) {
            state.currency = payload
        }
    },
    actions: {
        async fetchCurrency({commit}) {
            const key = process.env.VUE_APP_FIXER;

            let myHeaders = new Headers();
            myHeaders.append("apikey", key);
            
            const requestOptions = {
              method: 'GET',
              redirect: 'follow',
              headers: myHeaders
            };
            
            await fetch("https://api.apilayer.com/fixer/latest?&base=RUB&symbols=USD,EUR", 
                requestOptions
            )
            .then(response => response.json())
            .then(result => {
                commit('UPDATE_CURRENCY', result)
            })
            .catch(error => console.log('error', error));
        }
    }
}
