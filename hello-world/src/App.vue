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
          <PaymentsList :items="paymentsList" />
        </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import Button from './components/Button'
export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
    Button
  },
  data () {
    return {
      isActive: false,
      paymentsList: [
        {
          date: '13.05.2021',
          category: 'Education',
          price: 123
        },
        {
          date: '12.05.2021',
          category: 'Education',
          price: 456
        },
        {
          date: '11.05.2021',
          category: 'Education',
          price: 789
        },
        {
          date: '10.05.2021',
          category: 'Education',
          price: 0
        }
      ]
    }
  },
  methods: {
    onDataAdded (data) {
      this.paymentsList.push(data)
    },
    openForm () {
      this.isActive = !this.isActive
    }
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
