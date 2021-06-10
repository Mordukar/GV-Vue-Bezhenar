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
import { mapMutations } from 'vuex'
export default {
  name: 'ContextMenu',
  data () {
    return {
      statusMenu: false
    }
  },
  props: {
    name: String,
    item: Object
  },
  methods: {
    ...mapMutations([
      'deletePaymentsList'
    ]),
    toogleMenu () {
      this.statusMenu = !this.statusMenu
    },
    async onEdit () {
      this.$modal.show('PaymentForm')
      await this.$nextTick()
      this.$contextMenu.edit(this.item)
    },
    onDelete (index) {
      this.deletePaymentsList(index)
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
