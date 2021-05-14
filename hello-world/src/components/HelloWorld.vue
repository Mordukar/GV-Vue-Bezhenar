<template>
  <div class="hello">
    <input v-model.number="operand1"/>
    <input v-model.number="operand2"/>
    = {{ result }}
    <div>
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('^')">^</button>
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
  props: {},
  methods: {
    calculate (op) {
      const { operand1, operand2 } = this
      const calcOperations = {
        '+': () => operand1 + operand2,
        '-': () => operand1 - operand2,
        '*': () => operand1 * operand2,
        '/': () => operand1 / operand2,
        '^': () => Math.pow(operand1, operand2)
      }
      const finalResult = (calcOperations[op]())
      this.result = Math.floor(finalResult)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin : 40px 0 0;
}

ul {
  list-style-type : none;
  padding         : 0;
}

li {
  display : inline-block;
  margin  : 0 10px;
}

a {
  color : #42b983;
}
</style>
