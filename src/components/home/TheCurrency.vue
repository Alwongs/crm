<template>
    <div class="currency">
        <h2>Курс валют</h2>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.currency {
    background-color: rgb(245, 127, 49);
    border-radius: 5px;    
    flex: 3 0 650px;
    height: 40vh; 
    padding: 32px;     
    font-size: 24px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        flex: 4 0 400px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        flex: none;
        width: 100%;
    }
    @media (max-width: 768px) {
        flex: none;
        width: 100%;
    }
}
h2 {
    text-align: start;    
    font-size: 28px;
    font-weight: 400;
}
</style>