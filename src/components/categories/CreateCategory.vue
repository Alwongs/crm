<template>
    <div class="form-section create">
        <h2>Создать</h2>
        <form @submit.prevent="submitHandler">
            <div class="title-input">
                <input 
                    v-model="data.title" 
                    type="text" 
                    placeholder="Название"
                >
            </div>
            <div class="limit-input">
                <input 
                    v-model.number="data.limit" 
                    type="text" 
                    placeholder="Лимит"
                >
            </div>
            <button class="submit">Создать</button>
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
    setup() {
        const store = useStore();

        const data = ref({});

        const submitHandler = async () => {
            const category = await store.dispatch('createCategory', data.value);
            console.log(category)
        }

        return {
            data,
            submitHandler
        }
    },
}
</script>

<style lang="scss" scoped>

.form-section {
    width: 48%;
    :not(:last-child) input {
        margin-bottom: 64px; 
    }    
}
h2 {
    color: $black;
    font-weight: 500;    
    font-size: 30px;
    margin-bottom: 64px;
}
input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
}
button {
    background-color: rgb(103, 175, 144);
    border-radius: 3px;
    border: none;
    box-shadow: 0px 1px 3px 2px rgba(3, 3, 3, 0.4);
    padding: 7px 30px;
    font-size: 20px;
    color: $white;
    cursor: pointer;
}
</style>