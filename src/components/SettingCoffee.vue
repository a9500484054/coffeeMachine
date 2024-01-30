<template>
    <div>

        <h3 class="title-order text-center"> 
            <span v-if="showTitle">{{ `${selectedDrinkName} ` }}</span>
            <span v-if="showTitleVolume">{{ `${selectedItemVolume}мл ` }}</span>
            <span v-if="showTitleCount">{{ `${count} шт` }}</span>
        </h3>

        <!-- Выбор типа напитка -->
        <div class="card border-0">
            <div class="card-body">
            <p class="fw-bold text-brown">Выберите тип:</p>
            <div class="row">
                <div v-for="drink in listDrinks" :key="drink.id" class="col-xl-4">
                <MyButton :active="selectedDrinkId === drink.id" @click="setActiveDrink(drink.id, drink.name)">
                    {{ drink.name }}
                </MyButton>
                </div>
            </div>
            </div>
        </div>

        <!-- Выбор объема напитка -->
        <div class="card border-0" v-if="selectedDrinkVolumeData">
            <div class="card-body">
            <p class="fw-bold text-brown">Выбрать объем:</p>
            <div class="row">
                <div v-for="volume in selectedDrinkVolumeData.volume" :key="volume.id" class="col-xl-4">
                <MyButton :active="selectedVolumeId === volume.id" @click="setActiveVolume(volume.id, volume.value)">
                    {{ volume.value + ' мл' }}
                </MyButton>
                </div>
            </div>
            </div>
        </div>

        <!-- Выбор количества напитков -->
        <div v-if="selectedItemCountData">
            <div class="card border-0">
            <div class="card-body">
                <p class="fw-bold text-brown">Выбрать количество:</p>
                <div class="d-flex justify-content-between count-block__wrapper">
                <button class="count-block__btn" @click.prevent="subtractCount()" v-show="count > 1" type="button">
                    <i class="ri-subtract-fill"></i>
                </button>
                <div class="count-block__value">{{ count }}</div>
                <button class="count-block__btn ms-auto" @click.prevent="addCount()" v-show="count !== 12" type="button">
                    <i class="ri-add-line"></i>
                </button>
                </div>
            </div>
        </div>

        <div class="card border-0">
            <div class="card-body">
                <div class="row">
                <div v-for="countOption in countOptions" :key="countOption.id" class="col-lg-4">
                    <MyButton :active="selectedCount === countOption.id" @click="selectCount(countOption.value)">
                    {{ countOption.value }}
                    </MyButton>
                </div>
                </div>
            </div>
        </div>

        <div>
            <button class="count-block__btn w-100 py-2 px-3" @click="addToMyData">Добавить в хранилище</button>
        </div>
    </div>
    
        <Notification :visible="notification.visible" :message="notification.message" />
    </div>
</template>

<script>
import MyButton from '@/components//UI/MyButton.vue'
import Notification from '@/components/Notification.vue'
import axios from 'axios';
import mockServer from '@/server/myserver.js'

export default {
    components: { MyButton,Notification },
    data() {
        return {
            listDrinks: [
            {
                id: '1',
                type: 'coffee',
                name: 'Экспрессо',
                volume: [
                { id: 1, value: '250' },
                { id: 2, value: '400' },
                ],
            },
            {
                id: '2',
                type: 'coffee',
                name: 'Амерекано',
                volume: [
                { id: 1, value: '250' },
                { id: 2, value: '400' },
                ],
            },
            {
                id: '3',
                type: 'coffee',
                name: 'Капучино',
                volume: [
                { id: 1, value: '250' },
                { id: 2, value: '400' },
                ],
            },
            ],
            countOptions: [
            { id: 1, value: 6 },
            { id: 2, value: 8 },
            { id: 3, value: 12 },
            ],
            notification: {
                visible: false,
                message: '',
            },
            selectedDrinkId: false,
            selectedDrinkVolumeData: false,
            selectedVolumeId: false,
            selectedItemCountData: false,
            selectedCount: false,
            count: 6,
            selectedDrinkName: '',
            selectedItemVolume: '',
            showTitle: false,
            showTitleVolume: false,
            showTitleCount: false,

        }
    },
    methods: {
        setActiveDrink(id, name) {
            this.selectedDrinkId = id;
            this.selectedDrinkVolumeData = this.listDrinks.find((drink) => drink.id === id);
            this.selectedItemCountData = false;
            this.selectedDrinkName = name;
            this.checkShowTitle();
            this.$emit('typeCoffee', this.selectedDrinkId);
        },
        setActiveVolume(id, value) {
            this.selectedVolumeId = id;
            this.selectedItemCountData = true;
            this.selectedItemVolume = value;
            this.checkShowTitleVolume();
            this.checkShowTitleCount()
            this.$emit('volumeCoffee', value);
        },
        subtractCount() {
            if (this.count > 1) this.count--;
        },
        addCount() {
            if (this.count < 12) this.count++;
        },
        selectCount(value) {
            this.count = value;
        },
        async addToMyData() {
            const data = {
                volume: this.selectedItemVolume,
                title: this.selectedDrinkName,
                count: this.count,
            }

            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 12345'
                };

                const response = await axios.post('/api/data', data, { headers });
                if(!response) return

                this.$store.dispatch('addToMyDataAction', data);
                this.selectedDrinkVolumeData = false;
                this.selectedItemCountData = false;
                this.showTitle= false;
                this.showTitleVolume= false;
                this.showTitleCount= false;

                this.showNotification('Кофе успешно добавлен!');
                
                console.log(response);

            } catch (error) {
                console.error(error.response.data.error);
                this.showNotification('данные не отправлены!');
            }

            setTimeout(() => {
                this.hideNotification();
            }, 2000);
        },
        showNotification(message) {
            this.notification.visible = true;
            this.notification.message = message;
        },
        hideNotification() {
            this.notification.visible = false;
            this.notification.message = '';
        },
        checkShowTitle() {
            this.showTitle = true;
        },
        checkShowTitleVolume() {
            this.showTitleVolume = true;
        },
        checkShowTitleCount() {
            this.showTitleCount = true;
        },
    },
    watch: {
        selectedDrinkId: function (newVal, oldVal) {
            this.setActiveDrink(newVal, this.selectedDrinkName);
        },
    },
}
</script>

<style lang="scss" scoped>
    .title-order {
        min-height: 40px;
    }
</style>