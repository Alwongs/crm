<template>
    <div class="history-page">
        <header class="header">
            <h1>История</h1>
            <h2 class="bill">
                {{ $store.getters.info.bill }} руб
            </h2>            
        </header>

        <main class="content">
            <app-loader />
            <history-table :records="thisRecords"/>
        </main>
    </div>
</template>

<script>
import HistoryTable from '../components/history/HistoryTable.vue'
import AppLoader from '../components/app/AppLoader.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    components: { 
        HistoryTable, 
        AppLoader 
    },
    name: 'History', 
    setup() {
        const store = useStore();

        let thisRecords = ref([]);
        let thisCategories = ref([]);

        onBeforeMount(async () => {
            await store.dispatch('getCategories');
            await store.dispatch('getRecords');  
            const records = store.getters.records 

            thisCategories.value = store.getters.categories;
            thisRecords.value = records.map(record => {
                return {
                    ...record,
                    categoryName: thisCategories.value.find(cat => cat.id === record.categoryId).title,
                    typeClass: record.type === 'income' ? 'green' : 'red',
                    typeText: record.type === 'income' ? 'Доход' : 'Расход',
                }
            })
        })

        return {
            thisCategories,
            thisRecords
        }
    },         
}
</script>

<style lang="scss" scoped>

.history-page {
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
    position: relative;
    width: 100%;
    text-align: start;
}
</style>