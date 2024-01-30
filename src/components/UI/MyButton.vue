<template>
    <div>
        <button class="mb-3 my-btn" :class="{'active-link': active }" @click="$emit('click')">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            active: Boolean,
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
    .my-btn {
        background-color: transparent;
        padding: 20px 10px; 
        border: 1px solid #c49b63;
        border-radius: 8px;
        transition-duration: .5s;
        width: 100%;
        color: #c49b63;
        &:hover {
            color: #fff;
            background-color: #c49b63;
        }
    }
    .active-link {
        color: #fff;
        background-color: #c49b63;
      }
</style>