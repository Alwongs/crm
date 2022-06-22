<template>
    <div class="food-page">
        <header class="header">
            <h1>Продукты</h1>
        </header> 

        <main class="content">
            <button 
                class="get-food"
                @click="getFoodHandler"
            >
                Get Food
            </button>
            <div class="list-section">
                <ul>
                    <li 
                        v-for="food in foods"
                        :key="food"
                    >
                       {{ food.title }}: {{ food.energy }}кКл
                    </li>

                </ul>
            </div>

            <div class="form-section">
                <h2>Создать продукт</h2>
                <form @submit.prevent="createFoodHandler">
                    <div class="input-block title">
                        <input 
                            v-model="data.title" 
                            type="text" 
                            placeholder="Название"
                        >
                    </div>
                    <div class="input-block limit">
                        <input 
                            v-model.number="data.energy" 
                            type="text" 
                            placeholder="Лимит"
                        >
                    </div>
                    <button class="submit">Создать</button>
                </form>
            </div>
        </main>        
    </div>
</template>

<script>

import { useStore } from 'vuex'
//import { onBeforeMount } from 'vue'
import { ref } from 'vue'

import { computed } from 'vue'

export default {
    name: 'Food',
    setup() {
        const store = useStore();

        const data = ref({});

        const foods = computed(() => {
            return store.getters.foods;
        })

        const createFoodHandler = () => {
            //console.log(data)
            store.dispatch('createFood', data.value);
        }
        const getFoodHandler = () => {
            store.dispatch('fetchFood');
        }

        return {
            data,
            foods,
            createFoodHandler,
            getFoodHandler
        }
    },     
}
</script>

<style lang="scss" scoped>
.food-page {
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
.header {
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
.content {
    display: flex;
    justify-content: space-between;
    color: $black;  
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
h1 {
    color: $black;
    font-weight: 500;
}
h2 {
    color: $black;
    font-weight: 500;    
    font-size: 30px;
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 26px;
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
.list-section {
    width: 45%;
}
.form-section {
    width: 45%;
}
.input-block {
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
input {
    height: 32px;
    margin-right: 32px;
}
button {
    background-color: rgb(65, 108, 172);
    width: 100px;
    height: 32px;
    border-radius: 4px;
    color: white;
}
</style>