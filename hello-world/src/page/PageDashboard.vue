<template>
  <div>
    <div class="text-h5 text-md-h3 my-6">My Personal Costs</div>
    <v-row>
      <v-btn @click="openForm()">
        <router-link :to="{ path: '/add/payment/Food?value=200'}">Food 200</router-link>
      </v-btn>
      <v-btn @click="openForm()">
        <router-link :to="{ path: '/add/payment/Transport?value=50'}">Transport 50</router-link>
      </v-btn>
      <v-btn @click="openForm()">
        <router-link :to="{ path: '/add/payment/Entertainment?value=2000'}">Entertainment 2000</router-link>
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <transition name="fade">
          <Modal name="PaymentForm"/>
        </transition>
        <PaymentsList />
      </v-col>
      <v-col><ChartPaymentsList :chartdata="chartData" :options="chartOptions"/></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaymentsList from '../components/PaymentsList'
import Modal from '../components/modalwindows/Modal'
import ChartPaymentsList from '../components/vue-chart/chartPaymentList'

export default {
  components: {
    PaymentsList,
    Modal,
    ChartPaymentsList
  },
  data () {
    return {
      isActive: false,
      chartData: {},
      chartOptions: {}
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    chartdata () {
      const arr = this.getPaymentsList
      const result = arr.map(
        item => item.category
      )
      return result
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
      this.$modal.show('PaymentForm')
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang='scss'>
</style>
