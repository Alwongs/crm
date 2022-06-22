<template>
    <div class="form-section create">
        <h2>Создать</h2>
        <h4 v-if="message">{{ message }}</h4>
        <form @submit.prevent="submitHandler">
            <div class="input-block title">
                <input 
                    v-model="data.title" 
                    type="text" 
                    placeholder="Название"
                >
            </div>
            <div class="input-block limit">
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
import { ref } from 'vue'
//import { computed } from 'vue'

export default {
    setup() {
        const store = useStore();
        let data = ref({});

        let message = ref('');

        let makeNote = (note) => {
            message.value = note;
            setTimeout(() => {
                message.value = '';
            }, 5000);
        }

        const submitHandler = async () => {
            try {
                await store.dispatch('createCategory', data.value);
                makeNote('Категория создана!');
                data.value = {};
            } catch (e) {
                message.value = 'Ошибка' + e;
            }
        }

        return {
            message,
            data,
            submitHandler
        }
    },
}
</script>

<style lang="scss" scoped>

.form-section {
    position: relative;
    width: 45%;
    @media (max-width: 768px) {
        width: 100%;        
        margin-bottom: 64px;
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
h4 {
    background-color: rgb(139, 193, 133);
    border-radius: 3px;
    position: absolute;
    left:  0;
    top: -32px;
    width: 100%;
    font-size: 18px;
    line-height: 32px;
    height: 32px;
    color: white;
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
}
input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
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
</style>