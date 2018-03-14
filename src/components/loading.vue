<template>
  <div class="loading" v-if="loadStatus"></div>
</template>

<script>
  import './less/loading.less'
  import store from '../vuex/store'

  export default {
    computed:{
      loadStatus(){
        return store.state.loadStatus;
      }
    }
  }
</script>
