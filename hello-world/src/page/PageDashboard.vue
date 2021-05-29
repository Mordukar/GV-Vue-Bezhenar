<template>
  <div>
    <Button @openForm="openForm"/>
    <transition name="fade">
      <PaymentForm v-show="isActive" @add="onDataAdded" />
    </transition>
    <PaymentsList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PaymentForm from '../components/PaymentForm'
import PaymentsList from '../components/PaymentsList'
import Button from '../components/Button'
export default {
  components: {
    PaymentForm,
    PaymentsList,
    Button
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
