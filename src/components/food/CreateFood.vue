<template>
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
</template>

<script>

import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'Food',
    setup() {
        const store = useStore();
        const data = ref({});

        const createFoodHandler = () => {
            store.dispatch('createFood', data.value);
        }

        return {
            data,
            createFoodHandler
        }
    },     
}
</script>

<style lang="scss" scoped>

h2 {
    color: $black;
    font-weight: 500;    
    font-size: 24px;
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
.form-section {
    background-color: rgb(131, 167, 202);
    border-radius: 5px;
    width: 20%;
    padding: 16px;
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