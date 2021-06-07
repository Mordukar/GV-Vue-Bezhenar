<template>
    <div :class="[$style.wrapper]">
      <div :class="[$style.overlay]"></div>
      <div :class="[$style.content]">
        <header>{{ name }}</header>
        <PaymentForm v-if="name === 'PaymentForm'"/>
        <button @click="onClose">Close</button>
      </div>
    </div>
</template>

<script>
import PaymentForm from '../PaymentForm'
export default {
  name: 'Modal',
  components: {
    PaymentForm
  },
  data () {
    return {
    }
  },
  props: {
    name: String
  },
  methods: {
    onClose () {
      this.$modal.close()
    }
  },
  mounted () {
  }

}
</script>

<style module lang="scss">
    .wrapper {
      border: 1px solid black;
      position: relative;
      .overlay {
        position : absolute;
      }
    }
</style>
