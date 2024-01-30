<template>
    <div class="wrapper pt-3">
        <div class="machine">
            <img :src="currentCoffeeMachineImage"  alt="">
        </div>
        <div class="beaker" v-if="typeCoffee">
            <img :src="currentCoffeeImage"  alt=""  :class="{ 'beaker--medium': currentCoffeeImageСup === `400` }">
        </div> 
    </div>
</template>

<script lang="ts">
    export default {
        props: ['typeCoffee','volumeCoffee'], 
        data() {
            return {
                currentCoffeeMachineImage: `assets/img/cofemachin.png`,
            };
        },
        computed: {
            currentCoffeeImage(): string {
                return `assets/img/coffee-${this.typeCoffee}.png`;
            },
            currentCoffeeImageСup(): string {
                return this.volumeCoffee
            },
        },

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        position: relative;
    }
    .machine {
        text-align: center;
        img {
            width: 300px;
        }
    }
    .beaker {
        position: absolute;
        bottom: 55px;
        left: 51%;
        transform: translate(-50%);
        img {
            width: 100px;
        }
        &--medium {
            width: 160px !important;
        }
    }


    
</style>        