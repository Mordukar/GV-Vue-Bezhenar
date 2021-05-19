<template>
  <button @click="openForm">ADD NEW COST</button>
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

<style scoped>

</style>
