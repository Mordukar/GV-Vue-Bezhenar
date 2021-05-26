<template>
    <div :class="[$style.wrapper]">
        <button @click="onClick(cur - 1)">prev</button>
        <div
          :class="{[$style.active] : cur === i}"
          v-for="i in amount" :key="i" @click="onClick(i)">
            {{ i }}
        </div>
        <button @click="onClick(cur + 1)">next</button>
    </div>
</template>

<script>

export default {
  name: 'Pagination',
  data () {
    return {
    }
  },
  props: {
    length: Number,
    numberPage: Number,
    cur: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.numberPage)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  },
  mounted () {
    console.log(this.length)
  }
}
</script>

<style module lang="scss">
  .wrapper{
    display : flex;
    & div {
      margin : 0 20px;
    }
  }
  .active{

  }
</style>
