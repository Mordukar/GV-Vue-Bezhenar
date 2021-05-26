<template>
    <div>
        <button @click="prevPage">prev</button>
        <div v-for="(page, index) in pageCount" :key="index">
            <button @click="paginated($event.target.innerHTML)">{{ page }}</button>
        </div>
        <button @click="nextPage">next</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  data () {
    return {
      pageNumber: 0,
      pageSize: 5
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentsListLength'
    ]),
    pageCount () {
      const length = this.getPaymentsListLength
      const size = this.pageSize
      return Math.ceil(length / size)
    }
    // paginatedData () {
    //   const start = this.pageNumber * this.pageSize
    //   const end = start + this.pageSize
    //   return this.getPaymentsList.slice(start, end)
    // }
  },
  methods: {
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    },
    paginated (el) {
      this.$emit(el)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">

</style>
