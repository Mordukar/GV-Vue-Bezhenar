<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" />
    = {{ result }}
    <div>
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('^')">^</button>
    </div>
    <!--    <div>-->
    <!--      <input type="checkbox" id="checkbox" v-model="checked">-->
    <!--      <label for="checkbox">{{ checked }}</label>-->
    <!--    </div>-->
    <div>
      <button v-for="item in items" :key="item" @click="() => operand1 + item">
        {{ item }}
      </button>
    </div>
    <!--    <div>-->
    <!--      <input type="radio" id="one" value="Один" v-model="picked">-->
    <!--      <label for="one">Операнд 1</label>-->
    <!--      <br>-->
    <!--      <input type="radio" id="two" value="Два" v-model="picked">-->
    <!--      <label for="two">Операнд 2</label>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    checked: false,
    picked: false
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
      const finalResult = calcOperations[op]()
      this.result = Math.floor(finalResult)
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
