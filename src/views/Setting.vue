<template>
  <div>
    <Header />
    <div class="setting-coffee w-75 mx-auto pt-5">
        <div class="row m-0">
          <div class="col-lg-6">
            <SettingCoffee @typeCoffee="typeCoffeePlaced" @volumeCoffee="volumeCoffeePlaced"/>
          </div>
          <div class="col-lg-6">
            <CoffeeMach :typeCoffee="typeCoffeeDetails" :volumeCoffee="volumeCoffeeDetails"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
    import SettingCoffee from '@/components/SettingCoffee.vue'
    import CoffeeMach from '@/components/CoffeeMach.vue'
    import Header from '@/components/Header.vue'

    export default {
        components: {
          Header, 
          SettingCoffee,
          CoffeeMach,
        },
        data() {
          return {
            typeCoffeeDetails: '' as string,
            volumeCoffeeDetails: '' as string,
          };
        },
        methods: {
          typeCoffeePlaced(data: string) {
            this.typeCoffeeDetails = data;
          },
          volumeCoffeePlaced(data : string) {
            this.volumeCoffeeDetails = data;
          }
        },
    }
</script>

<style lang="scss">

</style>