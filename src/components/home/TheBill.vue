<template>
    <div class="bill">
        <h2>Счет в валюте</h2>
        <ul>
            <li class="bill-item">
                {{ bill.RUB }} Р
            </li>
            <li 
                v-if="bill.USD"
                class="bill-item">
                {{ bill.USD }} $
            </li>
            <li 
                v-if="bill.EUR"
                class="bill-item">
                {{ bill.EUR }} E
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'bill'
    ],
}
</script>

<style lang="scss" scoped>

.bill {
    background-color: rgb(40, 153, 210);
    border-radius: 5px;
    flex: 1 0 450px;
    margin-right: 32px;  
    padding: 32px;     
    font-size: 24px;
    .bill-item {
        border-bottom: 2px solid $white;
        padding: 24px 0;
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
    margin-bottom: 24px;
}
</style>