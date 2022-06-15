<template>
    <div class="modal-login">
        <h6 @click="$router.go(-1)">(Х)</h6>
        <h1>Авторизация</h1>
        <form 
            action="#" 
            class="form-login" 
            @submit.prevent="submitHandler"
        >
            <div 
                :class="{ invalid: v$.email.$errors.length > 0 }" 
                class="input-block email"
            >
                <label for="emailLogin">
                    email:
                </label>
                <input 
                    v-model.trim="email"
                    type="text" 
                    id="emailLogin"
                >   
                <div class="error" v-for="(error, index) of v$.email.$errors" :key="index">
                    {{ error.$property }} {{error.$message}}
                </div>                                          
            </div>

            <div 
                :class="{ invalid: v$.password.$errors.length > 0 }" 
                class="input-block password"
            >
                <label for="passwordLogin">
                    password:
                </label>
                <input 
                    v-model.trim="password"                
                    type="text" 
                    id="passwordLogin"                   
                >   
                <div class="error" v-for="(error, index) of v$.password.$errors" :key="index">
                    {{ error.$property }} {{error.$message}}
                </div>                           
            </div>  

            <div class="btn-block">
                <button 
                    type="submit" 
                    class="submit-btn"
                >
                    Войти
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
.modal-login {
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
        width: 90px;
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