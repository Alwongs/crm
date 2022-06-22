<template>
    <div class="list-section">
        <header class="food-list-header">
            <button
                @click="getFoodHandler"
            >
                Get Food
            </button>  
        </header>              
        <ul class="food-list">
            <li 
                v-for="food in foods"
                :key="food"
                class="food-item"                
            >
                <img :src="require('@/assets/img/png/food.png')" alt="">            
                {{ food.title }}: {{ food.energy }}кКл
            </li>
        </ul>



        <ul class="food-list">
            <li class="food-item">
                <img :src="require('@/assets/img/png/food.png')" alt="">
                Банан: 500кКл
            </li>
            <li class="food-item">
                <img :src="require('@/assets/img/png/food.png')" alt="">
                Хлеб: 300кКл
            </li>
            <li class="food-item">
                <img :src="require('@/assets/img/png/food.png')" alt="">
                Молоко: 100кКл
            </li>
        </ul>
    </div>  
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'Food',
    setup() {
        const store = useStore();
        const foods = computed(() => {
            return store.getters.foods;
        })

        const getFoodHandler = () => {
            store.dispatch('fetchFood');
        }

        return {
            foods,
            getFoodHandler
        }
    },     
}
</script>

<style lang="scss" scoped>

.list-section {
    background-color: rgb(236, 193, 193);
    border-radius: 5px;
    width: 70%;
    padding: 16px;
}
.food-list-header {
    text-align: start;
    margin-bottom: 32px;
}
button {
    background-color: rgb(65, 108, 172);
    width: 100px;
    height: 32px;
    border-radius: 4px;
    color: white;
    align-self: start;
}
.food-item {
    display: flex;
    height: 86px;
    line-height: 86px;
}
img {
    height: 86px;
    margin-right: 32px;
}
</style>