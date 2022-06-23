<template>
    <div class="home-page">
        <header class="header">
            <h1>Счет</h1>
            <button @click="updateCurrency">
                Обновить
            </button>
        </header>
        <main class="content">
            <the-bill :bill="bill"/>
            <the-currency :currency="currency"/>
        </main>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
//import { onBeforeMount } from 'vue'
import TheBill from '@/components/home/TheBill.vue'
import TheCurrency from '@/components/home/TheCurrency.vue'

export default {
    name: 'Home',
    components: { 
        TheBill, 
        TheCurrency 
    },
    setup() {
        const store = useStore();
/*
        const bill = {
            RUB: 10000,
            USD: 123,
            EUR: 125
        };
        const currency = [
            {
                title: 'USD',
                value: 56.71,
                date: '18.06.2022'
            },
            {
                title: 'EUR',
                value: 59.33,
                date: '18.06.2022'
            }
        ];
        */  
        const updateCurrency = async () => await store.dispatch('fetchCurrency');

        const bill = computed(() => {
            if (store.getters.currency.rates) {
                return {
                    RUB: store.getters.info.bill,
                    USD: store.getters.info.bill * store.getters.currency.rates.USD,
                    EUR: store.getters.info.bill * store.getters.currency.rates.EUR,
                }
            } else if (store.getters.currency.message) {
                return {
                    RUB: store.getters.info.bill,                    
                    USD: 'Лимит запросов исчерпан!',
                    EUR: 'Лимит запросов исчерпан!',
                }
            } else {
                return {
                    RUB: 'Запрос курса валют отключен разработчиком! :)',
                }
            }
        });
        const currency = computed(() => {
            return store.getters.currency.rates
        });
             
/*
        onBeforeMount(async ()  => {
            if (!store.getters.currency.rates) {
                //await store.dispatch('fetchCurrency');
            }
        });
        */  
        return {
            bill,
            currency,
            updateCurrency
        }
    },     
}
</script>

<style lang="scss" scoped>

.home-page {
    width: 100%;
    padding: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        padding: 0px 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0px 32px;
    }      
    @media (max-width: 768px) {
        padding: 0px 16px;
    }  
}
h1 {
    color: $black;
    font-weight: 500;
}

.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(223, 223, 223, 0.5);
    text-align: start;
    padding: 10px;
    margin-bottom: 36px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 16px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 16px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
button {
    background-color: rgb(151, 229, 207);
    box-shadow: 0px 0px 1px 1px rgba(128, 128, 128, 0.5);    
    border: none;
    border-radius: 5px;
    width: 85px;
    cursor: pointer;
    &:hover {
        background-color: rgb(142, 210, 192);        
    }
}
.content {
    display: flex;
    justify-content: space-between;
    color: $white;  
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
</style>