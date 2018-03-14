<template>
    <div class="box">
        <a href="javascript:void(0)" @click="showLoading()">显示loading</a>
    </div>
</template>

<script>
  import './less/index.less'
  import store from '../../vuex/store'

  export default {
    created(){
        store.commit('LOAD_STATUS',false);
    },

    mounted(){
        this.showLoading();
    },

    methods:{
        showLoading: function(){
            store.commit('LOAD_STATUS',true);
        }
    }
  }
</script>
