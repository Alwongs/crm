<template>
    <div class="modal-register">
        <h6 @click="$router.go(-1)">(Х)</h6>
        <h1>Регистрация</h1>
        <form 
            action="#" 
            class="form-register" 
            @submit.prevent="registerHandler"
        >

            <div class="input-block email">
                <label for="emailRegister">
                    email:
                </label>
                <input 
                    v-model.trim="data.email"
                    type="text" 
                    id="emailRegister"
                >                                           
            </div>
 

            <div class="input-block password">
                <label for="passwordRegister">
                    password:
                </label>
                <input 
                    v-model.trim="data.password"                
                    type="text" 
                    id="passwordRegister"                   
                >                             
            </div>  

            <div class="btn-block">
                <button 
                    type="submit" 
                    class="submit-btn"
                >
                    Сохранить
                </button>
            </div>
        </form>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

h6 {   
    text-align: end;
    cursor: pointer;
}
h1 {
    font-size: 24px;
    color: $black;
    margin-bottom: 24px;
}
.modal-register {
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 16px;
}
.input-block {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    text-align: end;
    border-bottom: 1px solid grey; 
    label {
        font-size: 13px;
        color: $grey;
        margin-right: 8px;
    }
    input {
        outline: 0;        
        align-self: left;
        height: 24px;
        width: 250px; 
        border: 0;    
    }
    .error {
        position: absolute;
        right: 0;
        bottom: -18px;
        font-size: 11px;
        font-weight: 300;
        color: red;
        text-align: end;
    }  
    &.invalid {
        border-color: red;
    }      
}

.btn-block {
    padding-top: 5px;
    text-align: end;
    .submit-btn {
        width: 100px;
        height: 28px;
        color: $white;
        font-size: 14px;
        background-color: rgb(39, 158, 255);
        box-shadow: 1px 1px 3px 0.5px rgba(0, 0, 0, 0.2);
        border: 0;
        border-radius: 4px;
        padding: 5px 8px;      
    }
}

.test {
    &:hover {
        background-color: green;
    }        
    &:focus {
        background-color: yellow;
    }        
    &:active {
        background-color: red;
    }      
}

</style>