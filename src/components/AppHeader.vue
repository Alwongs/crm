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
                v-if="name" 
                class="profile-link" 
                to="#"
                >
                    {{ name }}
            </router-link>
            <router-link
                v-if="!name"
                class="profile-link" 
                to="/login"
                >
                    Войти
            </router-link>
            <div 
                class="dropdown-btn" 
                :class="{ down: !isDropMenuOpen, up: isDropMenuOpen }"
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
import { onBeforeMount } from 'vue'
import moment from 'moment';
import { computed } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'AppHeader',
    setup() {
        const store = useStore();

        let isDropMenuOpen = ref(false);

        moment.locale('ru');
        const getTime = () => moment().format('DD MMM YYYY, HH:mm:ss');
        let date = ref(getTime());
        
        const name = computed(() => {
            return store.getters.info ? store.getters.info.name : ''
        });
        const toggleAside = () => store.commit('TOGGLE_ASIDE');
        const openDropMenu = () => isDropMenuOpen.value = !isDropMenuOpen.value;
        const logOutHandler = () => store.dispatch('logout');

        onBeforeMount(()  => {
            setInterval(() => {
                date.value = getTime();
            }, 1000)
        });

        return {
            isDropMenuOpen,
            date,
            name,
            logOutHandler,
            openDropMenu,
            toggleAside
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
        height: 52px;
        line-height: 52px;            
        padding: 0 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        height: 48px;
        line-height: 48px;           
        padding: 0 32px;
    }
    @media (max-width: 768px) {   
        height: 48px;
        line-height: 48px;    
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
    border-radius: 0 0 5px 5px;  
    position: absolute;
    right: 0;
    width: 150px;
    height: 60px;
    bottom: -60px;
    display: flex;
    flex-direction: column;
}
.dropdown-link {
    height: 30px;
    width: 100%;
    text-align: start;
    line-height: 30px;
    padding-left: 16px;
    &:hover {
        background-color: rgb(240, 213, 178);
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
        margin-left: 32px;          
    }
    &.down:after {
        rotate: 90deg;
    }
    &.up:after {
        rotate: 270deg;        
    }
}


</style>