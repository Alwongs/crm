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
                <div class="food-item">
                    <div class="item-image">
                        <img :src="require('@/assets/img/png/food.png')" alt="">
                    </div>
                    <div class="item-title">
                        {{ food.title }}:
                    </div> 
                    <ul class="item-nutrients"> 
                        <li>
                            <div class="key">
                                Белки:
                            </div>
                            <div class="value">
                                {{ food.protein }}г
                            </div>
                             
                        </li>
                        <li>
                            <div class="key">
                                Жиры:
                            </div>   
                            <div class="value">
                                {{ food.fat }}г
                            </div>                                                     
                        </li>
                        <li>
                            <div class="key">                            
                                Углеводы:
                            </div>   
                            <div class="value">
                                {{ food.carb }}г
                            </div>                                                     
                        </li>
                    </ul>                                                            
                    <div class="item-energy"> 
                         {{ food.energy }} кКал
                    </div>                                       
                </div>
            </li>            
        </ul>




        <!-- test data -->

        <ul class="food-list test-data">
                    Тестовые данные:
            <li>
                <div class="food-item">
                    <div class="item-image">
                        <img :src="require('@/assets/img/png/food.png')" alt="">
                    </div>
                    <div class="item-title">
                        Банан:
                    </div> 
                    <ul class="item-nutrients"> 
                        <li>
                            <div class="key">
                                Белки:
                            </div>
                            <div class="value">
                                39г
                            </div>
                             
                        </li>
                        <li>
                            <div class="key">
                                Жиры:
                            </div>   
                            <div class="value">
                                45г
                            </div>                                                     
                        </li>
                        <li>
                            <div class="key">                            
                                Углеводы:
                            </div>   
                            <div class="value">
                                12г
                            </div>                                                     
                        </li>
                    </ul>                                                            
                    <div class="item-energy"> 
                         408 кКал
                    </div>                                       
                </div>
            </li>
            <li>
                <div class="food-item">
                    <div class="item-image">
                        <img :src="require('@/assets/img/png/food.png')" alt="">
                    </div>
                    <div class="item-title">
                        Банан:
                    </div> 
                    <ul class="item-nutrients"> 
                        <li>
                            <div class="key">
                                Белки:
                            </div>
                            <div class="value">
                                39г
                            </div>
                             
                        </li>
                        <li>
                            <div class="key">
                                Жиры:
                            </div>   
                            <div class="value">
                                45г
                            </div>                                                     
                        </li>
                        <li>
                            <div class="key">                            
                                Углеводы:
                            </div>   
                            <div class="value">
                                12г
                            </div>                                                     
                        </li>
                    </ul>                                                            
                    <div class="item-energy"> 
                         408 кКал
                    </div>                                       
                </div>
            </li>
            <li>
                <div class="food-item">
                    <div class="item-image">
                        <img :src="require('@/assets/img/png/food.png')" alt="">
                    </div>
                    <div class="item-title">
                        Банан:
                    </div> 
                    <ul class="item-nutrients"> 
                        <li>
                            <div class="key">
                                Белки:
                            </div>
                            <div class="value">
                                39г
                            </div>
                             
                        </li>
                        <li>
                            <div class="key">
                                Жиры:
                            </div>   
                            <div class="value">
                                45г
                            </div>                                                     
                        </li>
                        <li>
                            <div class="key">                            
                                Углеводы:
                            </div>   
                            <div class="value">
                                12г
                            </div>                                                     
                        </li>
                    </ul>                                                            
                    <div class="item-energy"> 
                         408 кКал
                    </div>                                       
                </div>               
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
    flex: 1 0 450px;    
    border-radius: 5px;
    margin-right: 32px; 
    padding: 16px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        flex: 1 1 300px;
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
.food-list {
    &.test-data {
        margin-top: 128px;
    }
}
.food-item {
    display: flex;
    justify-content: space-between;
    height: 64px;
    width: 100%;
    border-bottom: 1px solid grey;
    cursor: pointer;
    &:hover {
        box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.5);
    }
}
.item-image{   
    height: 64px;   
}
img {
    height: 100%;
}
.item-title {
    line-height: 64px;
}
.item-nutrients {
    display: flex;
    flex-direction: column;
    justify-content: center;  
    flex: 0 0 120px;
    font-size: 14px;
    li {
        display: flex;  
        justify-content: flex-end;      
    }
    .value {
        flex: 0 0 32px;
    }
}
.item-energy {  
    line-height: 64px;        
}
</style>