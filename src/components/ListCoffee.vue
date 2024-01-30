<template>
    <div class="w-50 mx-auto pt-4">
        <h3 class="text-center mb-3">Список заказов</h3>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Наименование кофе</th>
                    <th class="text-center" scope="col">Объем</th>
                    <th class="text-center" scope="col">Количества</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(coffee, index) in this.getCoffeeList" :key="index">
                    <th class="th-id" scope="row">{{ index + 1 }}</th>
                    <td>{{ coffee.title }}</td>
                    <td class="text-center">{{ coffee.volume }}</td>
                    <td>
                        <div class="d-flex justify-content-between count-block__wrapper">
                            <button class="count-block__btn" @click.prevent="subtractCount(index)" v-show="coffee.count > 1" type="button">
                                <i class="ri-subtract-fill"></i>
                            </button>
                            <div class="count-block__value">{{ coffee.count }}</div>
                            <button class="count-block__btn ms-auto" @click.prevent="addCount(index)" v-show="coffee.count !== 12" type="button">
                                <i class="ri-add-line"></i>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr v-if="checkItem()">
                    <td colspan="6" class="text-center">Список пуст</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';


    export default {
        data() {
            return {
                count: 1,
            };
    },
    computed: {
        ...mapGetters(['getCoffeeList']),
    },
    methods: {
        ...mapActions(['updateCoffeeCount']),

        subtractCount(index) {
            const coffee = this.getCoffeeList[index];
            if (coffee.count > 1) this.updateCoffeeCount({ index, count: --coffee.count });
        },
        addCount(index) {
            const coffee = this.getCoffeeList[index];
            if (coffee.count < 12) this.updateCoffeeCount({ index, count: ++coffee.count });
        },
        checkItem() {
            return  this.getCoffeeList.length === 0 ? true : false;
        },
    }
    }
</script>

<style lang="scss" scoped>
    td,tr, th, h3 {
        color: #c49b63 !important;
    }
    table {
        --bs-table-border-color: #c49b63 !important;
    }
    .th-id {
        width: 50px;
    }
</style>