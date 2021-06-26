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
      <v-col>
        <ChartPaymentsList :chartData="chartNewData" :options="chartOptions"/>
        </v-col>
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
      // chartData: {
      //   labels: [
      //     'January',
      //     'February',
      //     'March',
      //     'April',
      //     'May',
      //     'June',
      //     'July',
      //     'August',
      //     'September',
      //     'October',
      //     'November',
      //     'December'
      //   ],
      //   datasets: [{
      //     label: 'Dataset 1',
      //     backgroundColor: '#f87979',
      //     data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      //   }]
      // },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    chartNewData () {
      const arr = this.getPaymentsList
      let labels = arr.map(
        item => item.category
      )
      labels = new Set(labels)
      labels = Array.from(labels)

      const data = labels.map(label => {
        const itemsCount = arr.filter(item => item.category === label).reduce((acc, item) => acc + item.price, 0)
        return itemsCount
      })
      return { labels, datasets: [{ label: 'Set 1', data, backgroundColor: '#f87979' }] }
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
