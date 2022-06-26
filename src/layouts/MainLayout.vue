<template>
    <app-header />
    <div class="wrapper">
        <aside-panel />
        <router-view />
    </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppHeader from '../components/app/AppHeader.vue'
import AsidePanel from '../components/app/AsidePanel.vue'

export default {
    components: { 
        AppHeader,
        AsidePanel
    },
    setup() {
        const store = useStore(); 

        onBeforeMount(async ()  => {
            await store.dispatch('fetchUser');
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    store.dispatch('fetchInfo', uid)
                }
            });
        });
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