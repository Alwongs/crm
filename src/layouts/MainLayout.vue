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
    async mounted() {

        await this.$store.dispatch('fetchUser')

        if (Object.keys(this.$store.getters.info)) {
            console.log('info is empty')
            await this.$store.dispatch('fetchInfo')
        }

    } 
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