<template>
    <div class="home-page">
        <header class="header">
            <h1>Счет</h1>
        </header>
        <main class="content">
            <div class="bill">
                <h2>Счет в валюте</h2>
                <div class="bill-content">
                    12.0 Р
                </div>
            </div>
            <div class="currency">
                <h2>Курс валют</h2>
            </div>
        </main>
    </div>
</template>

<script>

export default {
    name: 'Home',
}
</script>

<style lang="scss" scoped>

.home-page {
    width: 100%;
    padding: 32px;
}
h1 {
    color: $black;
    font-weight: 500;
}
h2 {
    text-align: start;    
    font-size: 28px;
    font-weight: 400;
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
}
.bill {
    background-color: rgb(56, 174, 232);
    border-radius: 5px;
    flex: 1 0 500px;
    height: 40vh; 
    margin-right: 20px;  
    padding: 32px;     
    font-size: 24px;
    .bill-content {
        border-bottom: 2px solid $white;
        padding: 32px 0;
        text-align: start;
    }
}

.currency {
    background-color: rgb(245, 127, 49);
    border-radius: 5px;    
    flex: 3 0 700px;
    height: 40vh; 
    padding: 32px;     
    font-size: 24px;
}


</style>