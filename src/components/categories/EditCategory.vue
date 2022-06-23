<template>
    <div class="form-section edit">
        <h2>Редактировать</h2>
        <div class="input-block select">
            <input 
                v-model="data.title"
                type="text" 
                placeholder="Выберете категорию"
                @click="toggleList"
            >
            <ul 
                v-if="isListOpen"
                class="category-list"
            >
                <li 
                    v-for="category in categories" 
                    :key="category.id"
                    class="category-item"
                    @click="selectCategory(category)"
                >
                    {{ category.title }}
                </li>
            </ul>
        </div>        
        <form @submit.prevent="submit">
            <div class="input-block title">
                <input 
                    v-model="data.title"
                    type="text" 
                    placeholder="Название"
                >
            </div>
            <div class="input-block limit">
                <input 
                    v-model="data.limit"
                    type="text" 
                    placeholder="Лимит"
                >
            </div>
            <button class="submit">Обновить</button>                    
        </form>                
    </div>  
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    props: ['categories'],
    setup() {
        const store = useStore();        
        let isListOpen = ref(false);
        const toggleList = () => isListOpen.value = !isListOpen.value;

        const data = ref({});
        const selectCategory = (cat) => {
            data.value.title = cat.title;
            data.value.limit = cat.limit;
            data.value.id = cat.id;
            toggleList();
        } 
        const submit = () => {
            store.dispatch('updateCategory', data.value)
        }
        return {
            data,
            isListOpen,
            toggleList,
            selectCategory,
            submit,
        }
    },    
}
</script>

<style lang="scss" scoped>

.form-section {
    width: 45%;
    @media (max-width: 768px) {
        width: 100%;  
    } 
}
h2 {
    color: $black;
    font-weight: 500;    
    font-size: 30px;
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 26px;
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
.input-block {
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
    &.select {
        position: relative;
    }
}
input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
    outline: none;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 18px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 16px;
    }  
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
.category-list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 3px 3px rgba(72, 72, 72, 0.5);
    position: absolute;
    width: 100%;
    left: 0;
    top: 32px;
}
.category-item {
    height: 48px;
    line-height: 48px;
    font-size: 22px;
    text-align: start;
    padding-left: 32px;
    cursor: pointer;
    &:hover {
        background-color: rgb(216, 216, 216);
    }
}
</style>