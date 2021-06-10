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
      id: 0,
      date: '',
      category: '',
      price: 0
    }
  },
  methods: {
    ...mapMutations([
      'setNewPaymentsListData',
      'editPaymentsListData'
    ]),
    save () {
      const { id, date, category, price } = this
      if (id) {
        this.editPaymentsListData({ id, date, category, price })
      } else {
        this.setNewPaymentsListData({ id, date, category, price })
      }
    },
    checkForNumber () {
      this.price = Number.isNaN(Number(this.$route.query.value)) ? 0 : Number(this.$route.query.value)
    },
    onEdit (item) {
      console.log(item)
      this.date = item.date
      this.category = item.category
      this.price = item.price
      this.id = item.id
    }
  },
  mounted () {
    this.date = new Date().toLocaleDateString()
    this.category = this.$route.params.category
    this.checkForNumber()
    this.$contextMenu.EventBus.$on('edit', this.onEdit)
  },
  watch: {
    '$route.path': function () {
      this.category = this.$route.params.category
      this.checkForNumber()
    }
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('edit', this.onEdit)
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
