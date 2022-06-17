export default {

    getters: {

    },
    state: {

    },
    mutations: {

    },
    actions: {
        async fetchCurrency() {
            const key = process.env.VUE_APP_FIXER;

            let myHeaders = new Headers();
            myHeaders.append("apikey", key);
            
            const requestOptions = {
              method: 'GET',
              redirect: 'follow',
              headers: myHeaders
            };
            
            fetch("https://api.apilayer.com/fixer/latest?&base=USD&symbols=EUR,RUB", 
                requestOptions
            )
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));






           // const res = await fetch(`https://api.apilayer.com/fixer/latest?apikey=${key}&base=USD&symbols=EUR,RUB`);
           // return await res.json();
        }
    }
}
