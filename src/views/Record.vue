<template>
    <div class="record-page">
        <header class="header">
            <h1>Новая запись</h1>
            <button @click="getCatHandler">
                Обновить
            </button>
        </header>
        <main class="content">
            <div class="input-block">
                <input 
                    v-model="categoryTitle"
                    type="text" 
                    placeholder="Выберете категорию" 
                    class="category-select"
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

            <div 
                class="radio-block income"
                @click="selectRadio(true)"
            >
                <div class="circle">
                    <div v-if="isIncome" class="circle-selected"></div>
                </div>
                Доход
            </div>
            <div 
                class="radio-block extenses"
                @click="selectRadio(false)"
            >
                <div class="circle">
                    <div v-if="!isIncome" class="circle-selected"></div>                    
                </div>
                Расход
            </div>

            <input 
                type="text" 
                placeholder="Сумма" 
                class="sum"
            >    
            <input 
                type="text" 
                placeholder="Описание" 
                class="description"
            >   
            <button class="submit">
                Создать
            </button>
        </main>
    </div>      
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'

export default {
    setup() {
        const store = useStore();
        let isIncome = ref(true);
        let isListOpen = ref(false);  
        const toggleList = () => isListOpen.value = !isListOpen.value;         

        const categories = computed(() => {
            return store.getters.categories;
        })

        const getCatHandler = () => {
            store.dispatch('getCategories');
        }

        const categoryTitle = ref('');


        const selectCategory = (cat) => {
            categoryTitle.value = cat.title
            toggleList();
        }  
        const selectRadio = (bool) => {
            isIncome.value = bool;
        }

        return {
            isIncome,
            categoryTitle,
            isListOpen,
            categories,
            selectRadio,
            selectCategory,
            toggleList,
            getCatHandler
        }
    }, 
}
</script>

<style lang="scss" scoped>

.record-page {
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
    text-align: start;
    width: 30%;
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
.input-block {
    position: relative;
}
input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
    outline: none; 
    margin-bottom: 32px;   
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 18px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 16px;
    }  
}
.category-list {
    z-index: 1;
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
.radio-block {
    display: flex;
    cursor: pointer;
    margin-bottom: 16px;
    &.extenses {
        margin-bottom: 32px;
    }
}
.circle {
    width: 20px;
    height: 20px;   
    border: 2px solid grey;
    border-radius: 50%;
    margin-right: 16px;
    position: relative;    
    .circle-selected {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: grey;
        border-radius: 50%;
    }
}
.submit {
    width: 140px;
    background-color: rgb(103, 175, 144);
    border-radius: 3px;
    border: none;
    box-shadow: 1px 1px 3px 2px rgba(3, 3, 3, 0.4);
    padding: 7px 0;
    font-size: 20px;
    color: $white;
    cursor: pointer;
}
</style>