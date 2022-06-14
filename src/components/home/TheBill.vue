<template>
    <div class="bill">
        <h2>Счет в валюте</h2>
        <div class="bill-content">
            12.0 Р
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.bill {
    background-color: rgb(56, 174, 232);
    border-radius: 5px;
    flex: 1 0 450px;
    height: 40vh; 
    margin-right: 20px;  
    padding: 32px;     
    font-size: 24px;
    .bill-content {
        border-bottom: 2px solid $white;
        padding: 32px 0;
        text-align: start;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        flex: 1 1 300px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-right: 0; 
        margin-bottom: 8px;
        width: 100%;
    }
    @media (max-width: 768px) {      
        margin-bottom: 8px;        
        width: 100%;
    }
}
h2 {
    text-align: start;    
    font-size: 28px;
    font-weight: 400;
}
</style>