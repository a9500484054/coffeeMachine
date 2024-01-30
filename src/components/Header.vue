<template>
    <div class="header">
        <nav>
            <router-link to="/">Выбрать кофе</router-link> 
            <router-link to="/list">Список заказов</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 1em 2em;
        background: #c49b63;
        font-weight: bold;
        a {
            color: #fff;
            margin-right: 1em;
            text-decoration: none;
            &:last-child {
                margin-right: 0;

            }
        }
    }

    
</style>