<template>
    <header class="app-header">
        <div class="menu">
            <div 
                class="menu-btn" 
                @click.prevent="toggleAside"
            ></div>
            <span class="date">{{ date }}</span>
        </div>

        <div class="profile">
            <router-link
                v-if="email" 
                class="profile-link" 
                to="#"
                >
                    {{ email }}
            </router-link>
            <router-link
                v-if="!email"
                class="profile-link" 
                to="/login"
                >
                    Войти
            </router-link>
            <div 
                class="dropdown-btn" 
                @click="openDropMenu"
            ></div>

            <div 
                v-if="isDropMenuOpen"
                class="dropdown">
                <router-link 
                    class="dropdown-link" 
                    to="/register"
                    >
                        Регистрация
                </router-link>
                <router-link 
                    class="dropdown-link" 
                    to="#"
                    @click="logOutHandler()"
                    >
                    Выйти
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from 'vue'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'AppHeader',
    setup() {
        const date = 'time'
        const store = useStore();
        const router = useRouter();
        let isDropMenuOpen = ref(false);        

        const email = computed(() => {
            return store.getters.user ? store.getters.user.email : ''
        });
        const openDropMenu = () =>  isDropMenuOpen.value = !isDropMenuOpen.value;       
        const logOutHandler = () => store.dispatch('logout');
        const goTo = (path) => router.push(path);

        onBeforeMount(() => {
            store.dispatch('fetchUser')
        });

        return {
            isDropMenuOpen,
            date,
            email,
            logOutHandler,
            goTo,
            openDropMenu
        }
    },  
}
</script>

<style lang="scss" scoped>

.app-header {
    background-color: rgb(241, 178, 122);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
    line-height: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        padding: 0 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0 32px;
    }
    @media (max-width: 768px) {      
        padding: 0 16px;
    }
}
.menu {
    display: flex;
    cursor: pointer;
}
.menu-btn {
    @media (max-width: 768px) {      
        background-image: url('../assets/img/svg/menu_btn.svg');
        background-position: center;
        width: 32px;
        height: 32px;
        align-self: center;
    } 

}
.date {
    font-weight: 400;
    color: rgb(0, 118, 61);
    @media (max-width: 768px) {      
        display: none;
    }  
}
.profile{
    position: relative;
    display: flex;
}
.dropdown {
    background-color: rgb(241, 178, 122);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.3);    
    position: absolute;
    right: 0;
    width: 200px;
    height: 60px;
    bottom: -60px;
    display: flex;
    flex-direction: column;
}
.dropdown-link {
    height: 30px;
    line-height: 30px;
    &:hover {
        background-color: rgb(184, 184, 184);
    }
}
.dropdown-btn {
    cursor: pointer;
    &:after {
        display: inline-block;
        content: '';
        background-image: url('../assets/img/svg/breadcrumbs.svg');
        height: 8px;
        width: 6px;
        background-size: contain;
        rotate: 90deg;
        margin-left: 32px;
    }
}
</style>