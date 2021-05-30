<template>
  <div id="app">
        <header >
          <h1 class="header">My personal costs</h1>
          <div class="wrapper">
            <router-link class="link" to="/dashboard/1">Dashboard</router-link>
            <router-link class="link" to="/about">About</router-link>
            <router-link class="link" to="/404">404</router-link>
          </div>
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
  .wrapper{
    margin: 30px 0;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    overflow: hidden;
    max-height : 0;
    margin: 0;
    padding: 0;
  }
  .link{
    display: inline-block;
    margin-right: 20px;
  }
</style>
