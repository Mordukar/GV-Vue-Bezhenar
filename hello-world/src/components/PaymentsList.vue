<template>
  <div>
    <transition name="fadeItem">
      <v-data-table
      :headers="tableHeaders"
      :items="listWithIndex"
      >
      </v-data-table>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PaymentsList',
  components: {
  },
  data () {
    return {
      page: 1,
      numberPage: 5,
      tableHeaders: [
        { text: '#', value: 'index' },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'price' }
      ]
    }
  },
  props: {
    items: Array,
    currentPage: Number,
    chartdata: Array,
    options: Array
  },
  computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
    listWithIndex () {
      return this.getPaymentsList.map((obj, i) => {
        obj.index = i + 1
        return obj
      })
    }
    // currentElements () {
    //   const { page, numberPage } = this
    //   return this.getPaymentsList.slice(numberPage * (page - 1), numberPage * (page - 1) + numberPage)
    // }
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
