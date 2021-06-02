<template>
    <div :class="[$style.wrapper]">
        <div class="overlay"></div>
        <header>Name</header>
        <PaymentForm v-if="modal === 'paymentform'"/>
        <button @click="onClose">Close</button>
    </div>
</template>

<script>
// import Button from '../Button'
import PaymentForm from '../PaymentForm'
export default {
  name: 'Modal',
  components: {
    PaymentForm
    // Button
  },
  props: {
    modal: String
  }

}
</script>

<style module>
    .wrapper{
        border: 1px solid black;
    }
</style>
