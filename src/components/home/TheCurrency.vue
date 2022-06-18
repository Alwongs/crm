<template>
    <div class="currency">
        <h2>Курс валют</h2>
        <table class="currency-table">
            <thead>
                <tr class="currency-header">
                    <th>Валюта</th>
                    <th>Курс</th>
                    <th>Дата</th>
                </tr>

            </thead>
            <tbody>
                <tr 
                    v-for="item in currency"
                    :key="item.title"
                    class="currency-item"
                >
                    <td>{{ item.title }}</td>
                    <td>{{ item.value }}</td>
                    <td>{{ item.date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: [ 'currency' ]
}
</script>

<style lang="scss" scoped>

.currency {
    background-color: rgb(224, 101, 30);
    border-radius: 5px;    
    flex: 3 0 580px; 
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
    margin-bottom: 48px;
}
.currency-table {
    width: 100%;
    border-collapse: collapse;    
}
.currency-header {
    height: 64px;
    border-bottom: 1pt solid rgba(163, 125, 101, 0.707);
    th {
        text-align: start;
    }

}
.currency-item {
    height: 64px;
    border-bottom: 1pt solid rgba(163, 125, 101, 0.707);
    text-align: start;
}
</style>