<template>
    <div v-if="visible" class="notification">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      message: String,
    },
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: #46d61bbb; /* Зеленый цвет (можете изменить по своему вкусу) */
    color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  </style>