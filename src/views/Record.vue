<template>
    <div class="record-page" @click="closeList">
        <header class="header">
            <h1>Новая запись</h1>
        </header>
        <main class="content">
            <app-loader v-if="loading"/>

            <form v-else action="#" @submit.prevent="createRecord">
                <div class="input-block">
                    <input 
                        v-model="data.category.title "
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
                    @click="selectRadio('income')"
                >
                    <div class="circle">
                        <div v-if="data.radioButton == 'income'" class="circle-selected"></div>
                    </div>
                    Доход
                </div>
                <div 
                    class="radio-block outcome"
                    @click="selectRadio('outcome')"
                >
                    <div class="circle">
                        <div v-if="data.radioButton == 'outcome'" class="circle-selected"></div>                    
                    </div>
                    Расход
                </div>

                <input 
                    v-model.number="data.sum"
                    type="text" 
                    placeholder="Сумма" 
                    class="sum"
                >    
                <input 
                    v-model="data.description"
                    type="text" 
                    placeholder="Описание" 
                    class="description"
                >   
                <button class="submit">
                    Создать
                </button>
            </form>
        </main>
    </div>      
</template>

<script>
import AppLoader from '@/components/app/AppLoader'
import { onBeforeMount } from 'vue'
import moment from 'moment';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'

export default {
    name: 'Record',
    components: { AppLoader },
    setup() {
        const store = useStore();
        let isListOpen = ref(false);

        let data = ref({category: {}});

        const loading = computed(() => {
            return store.getters.loading;
        })         

        const categories = computed(() => {
            return store.getters.categories;
        })

        const toggleList = () => isListOpen.value = !isListOpen.value; 
        const closeList = (e) => {
            if (e.target.classList.value !== 'category-select') {
                isListOpen.value = false;
            }
        }
        const selectCategory = (cat) => {
            data.value.category = cat;
            toggleList();
        }  
        const selectRadio = (value) => {
            data.value.radioButton = value;
        }

        const createRecord = async () => {
            try {
                const newRecord = {
                    categoryId: data.value.category.id,
                    type: data.value.radioButton,
                    sum: data.value.sum,
                    description: data.value.description,
                    date: moment().toJSON()
                }
                await store.dispatch('createRecord', newRecord);

                const bill = store.getters.info.bill;
                const newBill = newRecord.type === 'income' 
                ? bill + +newRecord.sum 
                : bill - +newRecord.sum;
                await store.dispatch('updateInfo', {bill: newBill});

                data.value = {category: data.value.category};                
            } catch (e) {
                console.log(e)
            }
        }

        onBeforeMount(async () => {
            store.commit('START_LOADING');
            await store.dispatch('getCategories');
            data.value.category = store.getters.categories[0];   
            store.commit('STOP_LOADING');            
        })          

        return {
            loading,
            data,
            isListOpen,
            categories,
            selectRadio,
            selectCategory,
            toggleList,
            closeList,
            createRecord
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
    width: 40%;
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 70%;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 90%;        
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        width: 100%;          
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
    white-space: nowrap;  
    overflow-x:hidden;
    cursor: pointer;
    &:hover {
        background-color: rgb(216, 216, 216);
    }
}
.radio-block {
    display: flex;
    cursor: pointer;
    margin-bottom: 16px;
    &.outcome {
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