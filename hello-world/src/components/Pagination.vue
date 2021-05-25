<template>
    <div>
        <div v-for="(item, index) in getPaymentsListLenght" :key="index">
            <div>{{ item }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      pageNumber: 0,
      pageSize: 10
    }
  },
  name: 'Pagination',
  computed: {
    ...mapGetters([
      'getPaymentsListLenght'
    ]),
    pageCount () {
      const lenght = this.getPaymentsListLenght
      const size = this.pageSize
      return Math.ceil(lenght / size)
    }
    // paginatedData () {
    //     const start = this.pageNumber * this.pageSize
    //     const end = start + this.pageSize;
    //     return this.listData.slice(start, end);
    // }
  },
  methods: {
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    }
  },
  mounted () {
    console.log(this.getPaymentsListLenght)
  }
}
</script>

<style lang="scss">

</style>
