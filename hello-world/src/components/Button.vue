<template>
  <button class="button" @click="openForm">ADD NEW COST</button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    openForm () {
      this.$emit('openForm')
    }
  }
}
</script>

<style lang="scss">
  .button{
    font-size : 20px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: aquamarine;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
      background-color: aqua;
    }
  }
</style>
