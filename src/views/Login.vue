<template>   
    <app-form 
        :title="'Авторизация'"
        :buttonValue="'Войти'"
        :footerMessage="'регистрация'"
        id="login-page"
        @closeModal="closeModal"
        @submitHandler="login"
        @goToPath="goToRegister"
    />
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AppForm from '@/components/app/AppForm.vue'

export default {
    components: { AppForm },
    setup() {
        const store = useStore();
        const router = useRouter();

        const closeModal = () => router.push('/');   
        const login = (data) => store.dispatch('login', data.value);
        const goToRegister = () => router.push('/register');       

        return {
            closeModal,
            login,
            goToRegister
        }
    }
}
</script>
