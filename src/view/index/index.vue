<template>
    <div class="box">
        <a href="javascript:void(0)" @click="showLoading()">显示loading</a>
    </div>
</template>

<script>
  import './less/index.less'
  import store from '../../vuex/store'

  export default {
    methods:{
        showLoading: function(){
            store.commit('LOAD_STATUS',true);
        }
    }
  }
</script>
