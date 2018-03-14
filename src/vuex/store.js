import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    loadStatus: false
}

const mutations = {
    //loading开关
    LOAD_STATUS: function(state,data){
        state.loadStatus = data;
    }
}


export default new Vuex.Store({
    state,
    mutations
})