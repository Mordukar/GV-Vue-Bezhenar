<template>
  <div class="form">
    <input class="form__item" placeholder="Date" v-model="date" />
    <input class="form__item" placeholder="Category" v-model="category" />
    <input class="form__item" placeholder="Price" v-model.number="price" />
    <button class="form__button" @click="save">Save</button>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    ...mapMutations([
      'setNewPaymentsListData'
    ]),
    save () {
      const { date, category, price } = this
      this.setNewPaymentsListData({ date, category, price })
    }
  },
  mounted () {
    this.date = new Date().toLocaleDateString()
    this.category = this.$route.params.category
    this.price = Number.isInteger(Number(this.$route.query.value)) ? Number(this.$route.query.value) : 0
  },
  watch: {
    '$route.path': function () {
      this.category = this.$route.params.category
      this.price = Number.isInteger(Number(this.$route.query.value)) ? Number(this.$route.query.value) : 0
    }
  }
}
</script>

<style lang="scss">
  .form{
    border-radius: 10px;
    padding : 15px;
    border: 1px solid black;
    margin-top : 30px;
    max-height : 400px;
    width : max-content;
    &__item{
      padding: 5px;
      margin-right : 20px;
    }
    &__button{
      display : block;
      font-size : 20px;
      margin-top : 20px;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
</style>
