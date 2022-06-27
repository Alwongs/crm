<template>
    <table class="table">
        <thead>
            <tr class="table-header">
                <th>#</th>
                <th>Сумма</th>
                <th>Дата</th>
                <th>Категория</th>
                <th>Тип</th>
                <th>Открыть</th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="(record, index) in records" 
                :key="record.id"
                class="table-item"
            >
                <td>{{ index + 1 }}</td>
                <td>{{ record.sum }}</td>
                <td>{{ record.date }}</td>
                <td>{{ record.categoryName }}</td>
                <td>
                    <span 
                        class="record-type"
                        :class="[ record.typeClass ]">
                        {{ record.typeText }}
                    </span>
                </td>
                <td>
                    <button>Открыть</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
/*
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
*/

export default {
    name: 'TableHistory',
    props: ['records'] ,
        
}
</script>

<style lang="scss" scoped>

.table {
    width: 100%;
    thead {
        text-align: left;
    }
}
.table-header {
    height: 32px;
    th {
        border-bottom: 1px solid grey;   
    } 
}
.table-item {
    height: 48px;
    td {
        border-bottom: 1px solid grey;   
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
button {
    width: 85px;
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