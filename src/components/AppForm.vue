<template>
    <div class="modal-login">
        <h6 @click="closeModal">(Х)</h6>
        <h1>{{ title }}</h1>
        <form 
            action="#" 
            class="app-form" 
            @submit.prevent="submitHandler"
        >
            <div 
                v-if="title == 'Регистрация'" 
                class="input-block"
            >
                <label for="nameRegiter">
                    name:
                </label>
                <input 
                    v-model.trim="data.name"
                    type="text" 
                    id="nameRegiter"
                >                                         
            </div>

            <div class="input-block">
                <label for="email">
                    email:
                </label>
                <input 
                    v-model.trim="data.email"
                    type="text" 
                    id="email"
                >                                         
            </div>

            <div class="input-block">
                <label for="password">
                    password:
                </label>
                <input 
                    v-model.trim="data.password"                
                    type="text" 
                    id="password"                   
                >                         
            </div>  

            <div class="btn-block">
                <button 
                    type="submit" 
                    class="submit-btn"
                >
                    {{ buttonValue }}
                </button>
            </div>
        </form>
        <h4 class="footer-message">
            <span @click="goToPath">
                {{ footerMessage }}
            </span>
        </h4>
    </div>   
</template>

<script>
import { ref } from 'vue'

export default {
    props: [
        'title',
        'buttonValue',
        'footerMessage'
    ],
    setup(_, {emit}) {
        const data = ref({});
        const closeModal = () => emit('closeModal');
        const submitHandler = () => emit('submitHandler', data);
        const goToPath = () => emit('goToPath');
        return {
            data,
            closeModal,
            submitHandler,
            goToPath,
        }
    }
}
</script>

<style lang="scss" scoped>

h6 {   
    margin-bottom: 8px;    
    text-align: end;
    cursor: pointer;
}
h1 {
    font-size: 28px;
    color: $black;
    margin-bottom: 32px;
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
input {
    outline: 0;        
    align-self: left;
    width: 100%; 
    border: 0;    
    font-size: 18px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 14px; 
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;        
    }
    @media (max-width: 768px) {      
        font-size: 14px;         
    }
}
.modal-login {
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    padding: 24px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 400px;
        padding: 16px;        
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 400px;
        padding: 16px;         
    }
    @media (max-width: 768px) {      
        width: 100%;
        border-radius: 0;        
    }
}
.input-block {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    text-align: end;
    border-bottom: 1px solid grey; 
    padding-bottom: 5px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 16px; 
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 16px;        
    }
    @media (max-width: 768px) {      
        margin-bottom: 16px;        
    }    
    label {
        font-size: 13px;
        color: $grey;
        margin-right: 16px;
    }
    .error {
        position: absolute;
        right: 0;
        bottom: -18px;
        font-size: 11px;
        font-weight: 300;
        color: red;
        text-align: end;
    }  
    &.invalid {
        border-color: red;
    }      
}
.btn-block {
    padding-top: 8px;
    text-align: end;
    .submit-btn {
        width: 90px;
        height: 32px;
        color: $white;
        font-size: 14px;
        background-color: rgb(39, 158, 255);
        box-shadow: 1px 1px 3px 0.5px rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 4px;     
    }
}
.footer-message {
    color: red;
    font-weight: 300;
    text-align: left;
    cursor: pointer;
}

.test {
    &:hover {
        background-color: green;
    }        
    &:focus {
        background-color: yellow;
    }        
    &:active {
        background-color: red;
    }      
}

</style>