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
        min-width: 250px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        min-width: 250px;
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
    height: 56px;
    line-height: 56px;
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
        padding-left: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 32px;
    }  
    @media (max-width: 768px) {      
        padding-left: 16px;
    }
}
</style>