<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.count-block {
  &__wrapper {
      background-color: #c49b6324;
      position: relative!important;
      border-radius: 4px;
  }
  &__value {
      width: 50px;
      display: flex;
      justify-content: center;
      align-content: center;
      font-weight: bold;
      font-size: 1.2em;
      color: #c49b63;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  &__btn {
      font-size: 1.2em;
      border: none;
      background: #c49b63;
      color: #fff;
      border-radius: 4px;
      transition: background-color .5s, box-shadow .5s;
      &:active {
          background-color: #c49c6348;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }

      &:hover {
          background-color: #c49c63bb;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
      &:focus {
          outline: none !important;
      }
  }
  .text-brown {
    color: #c49b63 !important;
  }
}
</style>
