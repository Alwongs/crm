<template>
    <aside 
        :class="{ active: $store.getters.isAsideOpen }" 
        class="aside-panel"
    >
        <nav class="navigation">
            <ul class="nav-list">
                <li                        
                    v-for="route in routes"
                    :key="route.url"
                    :class="{ active: $route.path == route.url }"
                    class="nav-item"
                    @click="goTo(route.url)"
                >
                    {{ route.title }}
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'AsidePanel',
    data() {
        return {
            routes: [
                {url: '/', title: 'Счет'},
                {url: '/history', title: 'История'},
                {url: '/planning', title: 'Планирование'},
                {url: '/record', title: 'Новая запись'},
                {url: '/categories', title: 'Категории'},
                {url: '/food', title: 'Продукты'},
            ]
        }
    },
    methods: {
        goTo(url) {
            this.$store.commit('TOGGLE_ASIDE');            
            this.$router.push(url);
        }
    }
}
</script>

<style lang="scss" scoped>

.aside-panel {
    background-color: #fff;
    min-width: 300px;
    height: calc(100vh - 64px);
    box-shadow: 2px 0 3px 1px rgba(0, 0, 0, 0.1);
    @media (min-width: 1024px) and (max-width: 1440px) {
        min-width: 200px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        min-width: 200px;
    }    
    @media (max-width: 768px) {
        position: absolute;
        left: 0;
        top: 64px;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        transform: translateX(-100%);
        z-index: 3;
        &.active {
            transform: translateX(0%);
        } 
    }   
}
.nav-item {
    height: 86px;
    line-height: 86px;
    font-size: 24px;
    text-align: start;
    padding-left: 64px;
    cursor: pointer;
    &:hover{
        background-color: rgb(255, 239, 227);        
    }
    &.active {
        background-color: rgb(255, 239, 227);
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        height: 56px;  
        line-height: 56px;
        font-size: 18px; 
        padding-left: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        height: 56px;  
        line-height: 56px;
        font-size: 18px;          
        padding-left: 32px;
    }  
    @media (max-width: 768px) {  
        height: 62px;  
        line-height: 62px;
        font-size: 26px;             
        padding-left: 16px;
    }
}
</style>