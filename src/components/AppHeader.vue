<template>
    <header class="app-header">
        <div class="menu">
            <span class="date">{{ date }}</span>
        </div>
        <div class="profile">
            <router-link 
                class="nav-link" 
                to="#"
                >
                    {{ name }}
            </router-link>

            <router-link 
                class="nav-link" 
                to="/login"
                >
                    Войти
            </router-link>
            <router-link 
                class="nav-link" 
                to="/register"
                >
                    Регистрация
            </router-link>
            <router-link 
                class="nav-link" 
                to="#"
                @click="logoutHandler"
                >
                   Выйти
            </router-link>
        </div>
    </header>
</template>

<script>
import date from '@/mixins/date.mixin.js';

export default {
    name: 'AppHeader',
    mixins: [date],
    computed: {
        name() {
            return this.$store.getters.info.name
        }
    },
    methods: {
        logoutHandler() {
            this.$store.dispatch('logout');
        },
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
}
.menu {
    cursor: pointer;
}
.profile{
    display: flex;
}
.nav-link {
    margin-left: 32px;
}
</style>