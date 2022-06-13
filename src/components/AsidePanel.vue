<template>
    <aside class="aside-panel">
        <nav class="navigation">
            <ul class="nav-list">
                <li                        
                    v-for="route in routes"
                    :key="route.url"
                    :class="{ active: $route.path == route.url }"
                    class="nav-item"
                    @click="$router.push(route.url)"
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
    }
}
</script>

<style lang="scss" scoped>

.aside-panel {
    background-color: #fff;
    min-width: 300px;
    height: calc(100vh - 64px);
    box-shadow: 2px 0 3px 1px rgba(0, 0, 0, 0.1);
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
}
</style>