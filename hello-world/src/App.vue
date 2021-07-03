<template>
  <v-app>
      <v-app-bar app flat>
        <v-container>
          <v-btn class="link" :ripple="false" plain to="/dashboard/1">Dashboard</v-btn>
          <v-btn class="link" :ripple="false" plain to="/about">About</v-btn>
          <v-btn class="link" :ripple="false" plain to="/404">404</v-btn>
        </v-container>
      </v-app-bar>
      <v-main>
          <router-view />
      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    onEdit ({ settings }) {
    }
  }
}
</script>

<style lang="scss">
  #app{
    position: relative;
  }
  .container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1200px;
  }
  .modal{
    z-index: 10;
  }
  .header {
    font-size : 56px;
    text-align : left;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .wrapper{
    margin: 30px 0;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .link{
    display: inline-block;
    margin-right: 20px;
  }
</style>
