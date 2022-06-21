<template>
    <div class="form-section edit">
        <h2>Редактировать</h2>
        <form @submit.prevent="submit">
            <div class="input-block title">
                <input type="text" placeholder="Выберете категорию">
            </div>
            <div class="input-block limit">
                <input type="text" placeholder="Лимит">
            </div>
            <button class="submit">Обновить</button>                    
        </form>                
    </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.form-section {
    width: 45%;
    @media (max-width: 768px) {
        width: 100%;  
    } 
}
h2 {
    color: $black;
    font-weight: 500;    
    font-size: 30px;
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 26px;
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
.input-block {
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
input {
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 18px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 16px;
    }  
}
button {
    background-color: rgb(103, 175, 144);
    border-radius: 3px;
    border: none;
    box-shadow: 0px 1px 3px 2px rgba(3, 3, 3, 0.4);
    padding: 7px 30px;
    font-size: 20px;
    color: $white;
    cursor: pointer;
}
</style>