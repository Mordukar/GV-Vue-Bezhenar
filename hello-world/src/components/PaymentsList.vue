<template>
  <div>
    <table class="resp-tab">
      <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      </thead>
    </table>
    <table v-for="(item, index) in items" :key="index" class="resp-tab">
      <thead>
      <tr>
        <th>{{ index }}</th>
        <th>{{ item.date }}</th>
        <th>{{ item.category}}</th>
        <th>{{ item.price }}</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  methods: {
    doSomething () {
      console.log(this.items)
    }
  }
}
</script>

<style lang="css">
.resp-tab {
  border-radius: 5px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
}
.resp-tab th, .resp-tab td {
  padding: 10px 20px;
  font-size: 13px;
  border: none;
  font-family: Verdana, sans-serif;
  border: 1px solid #337AB7;
  vertical-align: top;
}
.resp-tab th {
  color: #FFF;
  background: #337AB7;
  font-weight: bold;
  border: 1px solid #1a4a73;
  text-transform: uppercase;
  text-align: center;
}
.resp-tab tr:nth-child(even) {
  background: #edf7ff;
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
