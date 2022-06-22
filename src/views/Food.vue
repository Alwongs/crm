<template>
    <div class="food-page">
        <header class="header">
            <h1>Продукты</h1>
        </header> 
        <main class="content">
            <food-list />
            <create-food />
        </main>        
    </div>
</template>

<script>
import FoodList from '../components/food/FoodList.vue'
import CreateFood from '../components/food/CreateFood.vue'

export default {
  components: { FoodList, CreateFood },
    name: 'Food',    
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
</style>