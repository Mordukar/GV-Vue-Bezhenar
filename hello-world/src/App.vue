<template>
  <div id="app">
    <header class="header">
      My personal costs
    </header>
    <main>
      <Button @openForm="openForm"/>
      <PaymentForm v-show="isActive" @add="onDataAdded" />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
