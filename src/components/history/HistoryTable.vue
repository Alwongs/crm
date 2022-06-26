<template>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Сумма</th>
                <th>Дата</th>
                <th>Категория</th>
                <th>Тип</th>
                <th>Открыть</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(record, index) in records" :key="record.id">
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
.record-type {
    color: white;
    &.green {
        background-color: green;
    }
    &.red {
        background-color: red;
    }
}
</style>