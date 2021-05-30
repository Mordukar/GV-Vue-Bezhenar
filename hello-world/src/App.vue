<template>
  <div id="app">
        <header >
          <h1 class="header">My personal costs</h1>
          <router-link to="/dashboard/1">Dashboard</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/404">404</router-link>
        </header>
        <main>
          <router-view />
        </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  #app{
    max-width : 90%;
    margin : 0 auto;
  }
  .header {
    font-size : 56px;
    text-align : left;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    overflow: hidden;
    max-height : 0;
    margin: 0;
    padding: 0;
  }
</style>
