<template>
    <div class="hystory-table">
        <div class="table-header">
            <div>Дата</div>
            <div>Сумма</div>
            <div>Категория</div>
            <div>Тип</div>
            <div>Откр.</div>
        </div>
        <div class="table-body">
            <div 
                v-for="record in records" 
                :key="record.id"
                class="table-item"
            >
                <div class="date">{{ getDate(record.date) }}</div>
                <div class="sum">{{ record.sum }}р</div>
                <div class="category-name">{{ record.categoryName }}</div>
                <div class="type">
                    <span 
                        class="record-type"
                        :class="[ record.typeClass ]">
                        {{ record.typeText }}
                    </span>
                </div>
                <div class="btn">
                    <button>Откр.</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
/*
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
*/

export default {
    name: 'TableHistory',
    props: ['records'] ,
    setup() {
        moment.locale('ru');
        const getDate = (time) => moment(time).format('DD.MM.YY');
        
        return {
            getDate
        }
    }
}
</script>

<style lang="scss" scoped>

.hystory-table {
    width: 100%;
    @media (max-width: 768px) {
        display: flex;
    }  
}
.table-header {
    display: flex;
    justify-content: space-between;    
    height: 32px;
    border-bottom: 1px solid grey;  
    @media (max-width: 768px) {
        display: none;
    }         
}
.table-item {
    display: flex;
    justify-content: space-between;    
    min-height: 48px;
    line-height: 48px;
    text-align: start;
    border-bottom: 1px solid grey;      
    @media (max-width: 768px) {
        flex-direction: column;
    }      
}
.date {
    flex: 0 0 80px;
    font-size: 14px;
    font-weight: 700;
    @media (max-width: 768px) {
        flex: none;
        height: 32px;
    }  
}
.sum {
    flex: 0 0 80px;    
    font-size: 14px;
    font-weight: 700;   
    @media (max-width: 768px) {
        flex: none;
        height: 32px;
    }   
}
.category-name {
    flex: 0 0 180px;    
    font-size: 14px;
    font-weight: 700;  
    @media (max-width: 768px) {
        flex: none;
        height: 32px;        
    }   
}
.type {
    flex: 0 0 70px;
    font-size: 14px;  
    @media (max-width: 768px) {
        flex: none;
        height: 32px;        
    }   
}
.record-type {
    color: white;
    padding: 1px 5px;
    &.green {
        background-color: green;
    }
    &.red {
        background-color: red;
    }
}
.btn {
    flex: 0 0 60px;
    @media (max-width: 768px) {
        flex: none;
        height: 32px;        
    }  
}
button {
    width: 50px;
    background-color: rgb(103, 175, 144);
    border-radius: 3px;
    border: none;
    box-shadow: 1px 1px 2px 1px rgba(3, 3, 3, 0.4);
    padding: 5px 0;
    font-size: 14px;
    color: $white;
    cursor: pointer;
}
</style>