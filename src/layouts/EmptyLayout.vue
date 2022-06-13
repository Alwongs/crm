<template>
    <div class="empty-layout">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'EmptyLayout'
}
</script>

<style lang="scss" scoped>

.empty-layout {
    background-color: rgba(65, 52, 52, 0.801);
    height: 100vh;
}
</style>