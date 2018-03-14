<template>
  <div id="app">
    <h1>{{title}}</h1>

    <router-view keep-alive></router-view>

    <loading></loading>
  </div>
</template>

<script>
  import './resources/less/reset.less'

  import Vue from 'vue'

  import loading from './components/loading'
  Vue.component('loading', loading)

  export default {
    data(){
      return {
        title: 'Hello World'
      }
    }
  }
</script>
