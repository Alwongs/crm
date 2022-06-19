<template>
    <div class="food-page">
        <h1>Продукты</h1>

        <form action="#" @submit.prevent="createFoodHandler">
            <input v-model="name" type="text">
            <input v-model="energy" type="text">
            <button>Сохранить</button>
        </form>

    </div>
</template>

<script>

import { useStore } from 'vuex'
//import { onBeforeMount } from 'vue'
import { ref } from 'vue'
/*
import { computed } from 'vue'
*/

export default {
    name: 'Food',
    setup() {
        const store = useStore();

        const name = ref('');
        const energy = ref('');

        const createFoodHandler = () => {
            const data = {
                name: name.value,
                energy: energy.value
            }
            //console.log(data)
            store.dispatch('createFood', data.name);
        }

        return {
            name,
            energy,
            createFoodHandler
        }
    },     
}
</script>

<style lang="scss" scoped>
.food-page {
    padding: 32px;
}
h1 {
    margin-bottom: 32px;
}
input {
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