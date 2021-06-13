<template>
  <div>
    <transition name="fadeItem">
      <table class="resp-tab">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in currentElements" :key="index" class="resp-tab">
            <th>{{ item.id }}</th>
            <th>{{ item.date }}</th>
            <th>{{ item.category}}</th>
            <th>{{ item.price }}</th>
            <ContextMenu :index='index' :item='item'/>
          </tr>
        </tbody>
      </table>
    </transition>
    <Pagination
      :length="getPaymentsList.length"
      :numberPage="numberPage"
      :cur="page"
    />
    <button @click="showPaymentsForm">Show Payments List Form</button>
  </div>
</template>

<script>
import Pagination from './Pagination'
import { mapGetters } from 'vuex'
import ContextMenu from '@/components/context-menu/ContextMenu'
export default {
  name: 'PaymentsList',
  components: {
    ContextMenu,
    Pagination
  },
  data () {
    return {
      page: 1,
      numberPage: 5
    }
  },
  props: {
    items: Array,
    currentPage: Number
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    currentElements () {
      const { page, numberPage } = this
      return this.getPaymentsList.slice(numberPage * (page - 1), numberPage * (page - 1) + numberPage)
    }
  },
  methods: {
    showPaymentsForm () {
      this.$modal.show('PaymentForm')
    }
  },
  watch: {
    '$route.path': function () {
      this.page = +this.$route.params.page
    }
  },
  mounted () {
    this.page = +this.$route.params.page
  }
}
</script>

<style lang="scss">
.resp-tab {
  margin-top: 50px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  max-width: 90%;
}
.resp-tab th, .resp-tab td {
  padding: 10px 20px;
  font-size: 13px;
  font-family: Verdana, sans-serif;
  border: 1px solid #337AB7;
  vertical-align: top;
}
.resp-tab th {
  color: black;
  background: white;
  font-weight: bold;
  border: 1px solid #1a4a73;
  text-transform: uppercase;
  text-align: center;
}
.resp-tab td span {
  background: #337AB7;
  color: #FFF;
  display: none;
  font-size: 11px;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  text-transform: uppercase;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 0;
}
@media(max-width: 768px) {
  .resp-tab thead {
    display: none;
  }
  .resp-tab tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .resp-tab td {
    margin: 0 -1px -1px 0;
    padding-top: 35px;
    position: relative;
    width: 50%;
  }
  .resp-tab td span {
    display: block;
  }
  }
@media(max-width: 480px) {
  .resp-tab td {
    width: 100%;
  }
}
</style>
