<template>
  <div class="hello">
    <input name="operand1" v-model.number="operand1" ref="operand1"/>
    <input name="operand2" v-model.number="operand2" ref="operand2"/>
    = {{ result }}
    <div>
      <button name="+" @click="calculate('+')">+</button>
      <button name="-" @click="calculate('-')">-</button>
      <button name="*" @click="calculate('*')">*</button>
      <button name="/" @click="calculate('/')">/</button>
      <button name="^" @click="calculate('^')">^</button>
    </div>
    <div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    </div>
    <div v-show="checked === true" class="wrapper">
      <div class="buttons">
        <button
        v-bind:name="item"
        v-for="item in items"
        :key="item"
        @click="sendKey(item)">
          {{ item }}
        </button>
        <button @click="deleteKey">&larr;</button>
      </div>
      <div class="inputs">
        <input @click="chooseInput1" checked type="radio" id="one" value="one" v-model="picked">
        <label for="one">Операнд 1</label>
        <br>
        <input @click="chooseInput2" type="radio" id="two" value="two" v-model="picked">
         <label for="two">Операнд 2</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    checked: false,
    operand1: '',
    operand2: '',
    result: 0,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    picked: 'one'
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
    },
    sendKey (item) {
      if (this.picked === 'one') {
        this.operand1 = this.operand1 + item
      } else if (this.picked === 'two') {
        this.operand2 = this.operand2 + item
      }
    },
    deleteKey () {
      const str1 = String(this.operand1)
      const str2 = String(this.operand2)
      if (this.picked === 'one') {
        this.operand1 = str1.slice(0, -1)
      } else if (this.picked === 'two') {
        this.operand2 = str2.slice(0, -1)
      }
    },
    chooseInput1 () {
      const choose1 = this.$refs.operand1
      choose1.focus()
    },
    chooseInput2 () {
      const choose2 = this.$refs.operand2
      choose2.focus()
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
