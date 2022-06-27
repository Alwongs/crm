<template>  
    <app-loader v-if="loading" />
    <app-form 
        v-else
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
import AppForm from '@/components/app/AppForm.vue'
import AppLoader from '@/components/app/AppLoader.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
    components: { AppForm, AppLoader },
    setup() {
        const store = useStore();
        const router = useRouter();

        const loading = computed(() => {
            return store.getters.loading;
        })         

        const closeModal = () => router.push('/');   
        const login = (data) => store.dispatch('login', data.value);
        const goToRegister = () => router.push('/register');       

        return {
            loading,
            closeModal,
            login,
            goToRegister
        }
    }
}
</script>
