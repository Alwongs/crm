<template>
    <app-header />
    <div class="wrapper">
        <aside-panel />
        <router-view />
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AsidePanel from '../components/AsidePanel.vue'

export default {
    components: { 
        AppHeader,
        AsidePanel
    },

}
</script>

<style lang="scss" scoped>

.main-layout {
    height: 100%;
}
.wrapper {
    padding-top: 64px;
    display: flex;
}
</style>