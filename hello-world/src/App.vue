<template>
  <div id="app">
    <transition name="fade">
      <Modal v-if="modalShown" name="PaymentForm"/>
    </transition>
    <header >
      <h1 class="header">My personal costs</h1>
      <div class="wrapper">
        <router-link class="link" to="/dashboard/1">Dashboard</router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/404">404</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import Modal from './components/modalwindows/Modal'
export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      modalShown: ''
    }
  },
  methods: {
    onShow ({ name }) {
      this.modalShown = name
    },
    onClose () {
      this.modalShown = ''
    },
    onEdit ({ settings }) {
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShow)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="scss">
  #app{
    max-width : 90%;
    margin : 0 auto;
  }
  .header {
    font-size : 56px;
    text-align : left;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .wrapper{
    margin: 30px 0;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .link{
    display: inline-block;
    margin-right: 20px;
  }
</style>
