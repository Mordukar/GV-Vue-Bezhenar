<template>
  <div class="hello">
    <input v-model.number="operand1" type="text">
    <input v-model.number="operand2" type="text">
    = {{ result }}
    <div>
      <button @click="calculate">+</button>
      <button @click="calculate">-</button>
      <button @click="calculate">*</button>
      <button @click="calculate">/</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0
  }),
  props: {

  },
  methods: {
    calculate(operand) {
      this.result = this.operand1 + this.operand2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
