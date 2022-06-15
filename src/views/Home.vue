<template>
    <div class="home-page">
        <header class="header">
            <h1>Счет</h1>
        </header>
        <main class="content">
            <the-bill />
            <the-currency />
        </main>
    </div>
</template>

<script>
import TheBill from '@/components/home/TheBill.vue'
import TheCurrency from '@/components/home/TheCurrency.vue'

export default {
    name: 'Home',
    components: { 
        TheBill, 
        TheCurrency 
    },
}
</script>

<style lang="scss" scoped>

.home-page {
    width: 100%;
    padding: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        padding: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 16px;
    }      
    @media (max-width: 768px) {
        padding: 16px;
    }  
}
h1 {
    color: $black;
    font-weight: 500;
}

.header {
    border-bottom: 2px solid rgba(223, 223, 223, 0.5);
    text-align: start;
    padding: 10px;
    margin-bottom: 36px;
}
.content {
    display: flex;
    justify-content: space-between;
    color: $white;
    //padding: 32px;   
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 16px;
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
</style>