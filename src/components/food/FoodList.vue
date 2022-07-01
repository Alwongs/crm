<template>
    <div class="list-section">             
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
    </div>  
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { onBeforeMount } from 'vue'

export default {
    name: 'Food',
    setup() {
        const store = useStore();

        const foods = computed(() => {
            return store.getters.foods;
        })

        onBeforeMount(async () => {
            store.commit('START_LOADING'); 
            store.dispatch('fetchFood');
            store.commit('STOP_LOADING');            
        })

        return {
            foods
        }
    },     
}
</script>

<style lang="scss" scoped>

.list-section {
    flex: 1 0 450px;    
    border-radius: 5px;
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
    width: 100%;
    border-bottom: 1px solid grey;
    cursor: pointer;
    &:hover {
        background-color: rgb(203, 243, 217);
    }
}
.item-image{  

    flex: 0 0 50px;   
}
img {
    height: 54px;
}
.item-title {
    display: flex;
    flex-direction: column;
    justify-content: center; 
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
    display: flex;
    flex-direction: column;
    justify-content: center;       
}
</style>