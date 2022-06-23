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
            <div class="input-block energy">
                <input 
                    v-model.number="data.energy" 
                    type="text" 
                    placeholder="Калорийность"
                >
            </div>
            <div class="input-block protein">
                <input 
                    v-model.number="data.protein" 
                    type="text" 
                    placeholder="Белки"
                >
            </div>
            <div class="input-block fat">
                <input 
                    v-model.number="data.fat" 
                    type="text" 
                    placeholder="Жиры"
                >
            </div>
            <div class="input-block carb">
                <input 
                    v-model.number="data.carb" 
                    type="text" 
                    placeholder="Углеводы"
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

        const createFoodHandler = async () => {
            await store.dispatch('createFood', data.value);
            data.value = {};
        }

        return {
            data,
            createFoodHandler
        }
    },     
}
</script>

<style lang="scss" scoped>

.form-section {
    background-color: rgb(131, 167, 202);
    flex: 0 0 300px;     
    border-radius: 5px;
    width: 20%;
    padding: 16px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        flex: 0 0 200px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-right: 0; 
        margin-bottom: 8px;
        width: 100%;
    }
    @media (max-width: 768px) {      
        margin-bottom: 8px;        
        width: 100%;
    }
}
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
    width: 100%;
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