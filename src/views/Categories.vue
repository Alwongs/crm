<template>
    <div class="category-page">
        <header class="header">
            <h1>Счет</h1>
        </header>
        <main class="content">
            <create-category />
            <edit-category :categories="categories" />
        </main>
    </div>
</template>

<script>
import CreateCategory from '../components/categories/CreateCategory.vue'
import EditCategory from '../components/categories/EditCategory.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    components: { 
        CreateCategory,
        EditCategory
    },
    setup() {
        const store = useStore();
        const categories = computed(() => {
            return store.getters.categories;
        })

        onBeforeMount(async () => {
            store.commit('START_LOADING');
            store.dispatch('getCategories');
            store.commit('STOP_LOADING');            
        })        

        return {
            categories,
        }
    },    
}
</script>

<style lang="scss" scoped>

.category-page {
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
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
button {
    padding: 10px;
    cursor: pointer;
}
</style>