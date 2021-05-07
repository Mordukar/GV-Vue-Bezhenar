<template>
  <div class="hello">
    <input v-model.number="operand1"/>
    <input v-model.number="operand2"/>
    = {{ result }}
    <div>
      <button @click="calculate($event)">+</button>
      <button @click="calculate($event)">-</button>
      <button @click="calculate($event)">*</button>
      <button @click="calculate($event)">/</button>
      <button @click="calculate($event)">/</button>
      <button @click="calculate($event)">/</button>
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
    calculate (e) {
      console.log(e.target.innerHTML)
      // eslint-disable-next-line no-unused-vars
      const operation = e.target.innerHTML
      // let operation = switch (e.target.innerHTML) {
      //   case '+':
      //     return;
      //   case '-':
      //     return;
      //   case '*':
      //     return;
      //   case '/':
      //     return;
      //   default:
      //     alert( "Нет таких значений" );
      // }
      // eslint-disable-next-line no-eval
      this.result = eval(this.operand1 + e.target.innerHTML + this.operand2)
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
