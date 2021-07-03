<template>
  <div>
    <v-dialog
      v-model="showModal"
      max-width="30%"
    >
      <template v-slot:activator="{ on }">
        <v-btn
        color="teal"
        dark
        v-on="on"
        >
          ADD PAYMENT
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <PaymentForm v-if="name === 'PaymentForm'"/>
      </v-card>
    </v-dialog>
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
      showModal: false
    }
  },
  props: {
    name: String,
    value: Boolean
  },
  methods: {
  },
  mounted () {
    this.showModal = this.value
  },
  watch: {
    value: function (isShown) {
      this.showModal = isShown
    },
    showModal: function (isShown) {
      this.$emit('input', isShown)
    }
  }

}
</script>

<style module lang="scss">
  .wrapper{
    z-index: 10;
  }
  .overlay{
    position: absolute;
    background-color: black;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
  }
  .content{
    z-index: 10;
    border-radius: 20px;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 20px;
    background-color: #fff;
    color: #000;
    padding: 20px;
  }
  .close{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    top: 10px;
    right: 10px;
  }
</style>
