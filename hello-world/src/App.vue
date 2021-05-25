<template>
  <div id="app">
        <header >
          <h1 class="header">My personal costs</h1>
        </header>
        <main>
          <Button @openForm="openForm"/>
          <transition name="fade">
            <PaymentForm v-show="isActive" @add="onDataAdded" />
          </transition>
          <PaymentsList/>
          <Pagination/>
        </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import Button from './components/Button'
import Pagination from './components/Pagination'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Button,
    Pagination
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    openForm () {
      this.isActive = !this.isActive
    }
  },
  mounted () {
    this.fetchData()
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
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    overflow: hidden;
    max-height : 0;
    margin: 0;
    padding: 0;
  }
</style>
