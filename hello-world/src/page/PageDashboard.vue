<template>
  <div>
    <div class="wrapper">
      <div @click="isActive = true">
        <router-link :to="{ path: '/add/payment/Food?value=200'}">Food 200</router-link>
      </div>
      <div @click="isActive = true">
        <router-link :to="{ path: '/add/payment/Transport?value=50'}">Transport 50</router-link>
      </div>
      <div @click="isActive = true">
        <router-link :to="{ path: '/add/payment/Entertainment?value=2000'}">Entertainment 2000</router-link>
      </div>
    </div>
    <PaymentsList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PaymentsList from '../components/PaymentsList'

export default {
  components: {
    PaymentsList
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

<style lang='scss'>
  .wrapper{
    margin: 20px 0;
  }
  #app{
      max-width : 90%;
      margin : 0 auto;
    }
    .header {
      font-size : 56px;
      text-align : left;
    }
</style>
