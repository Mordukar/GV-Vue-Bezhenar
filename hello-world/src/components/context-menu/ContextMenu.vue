<template>
  <div class="wrapper">
    <button @click="toogleMenu">+</button>
    <transition name="fadeMenu">
      <div v-show="statusMenu" class="menu">
        <button @click="onEdit">Edit</button>
        <button @click="onDelete">Delete</button>
      </div>
    </transition>
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
    item: Object,
    index: Number
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
    onDelete () {
      this.deletePaymentsList(this.index)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    z-index: 1;
    position: relative;
  }
  .fadeMenu-enter-active, .fadeMenu-leave-active {
    transition: all .5s;
  }
  .fadeMenuenter, .fadeMenu-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .menu{
    top: 0;
    left: 30px;
    position: absolute;
  }
</style>
