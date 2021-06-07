<template>
  <div class="wrapper">
    <button @click="toogleMenu">+</button>
    <div v-show="statusMenu" class="menu">
      <button @click="onEdit">Редактировать</button>
      <button @click="onDelete">Удалить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContextMenu',
  data () {
    return {
      statusMenu: false
    }
  },
  props: {
    name: String
  },
  methods: {
    toogleMenu () {
      this.statusMenu = !this.statusMenu
    },
    onEdit () {
      this.$emit('onEdit')
    },
    onDelete () {
      this.$emit('onDelete')
    }
  }
}
</script>

<style scoped>
  .wrapper{
    position: relative;
  }
  .menu{
    top: 0;
    position: absolute;
  }
</style>
