<template>
    <div :class="[$style.wrapper]">
        <router-link :to="{ name: 'dashboardPage', params: { page: this.cur - 1}}">prev</router-link>
        <router-link :to="{ name: 'dashboardPage', params: { page: i}}"
          :class="{[$style.active] : cur === i}"
          v-for="i in amount" :key="i">
            {{ i }}
        </router-link>
        <router-link :to="{ name: 'dashboardPage', params: { page: this.cur + 1}}">next</router-link>
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

  },
  mounted () {

  }
}
</script>

<style module lang="scss">
  .wrapper{
    margin: 20px 0;
    display : flex;
    & a {
      padding : 10px;
      margin : 0 20px;
    }
  }
  .active{
    background-color: lightgrey;
  }
</style>
