import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city:'上海'
    },
    /*****点击热门,您的位置相对应切换***/
    // actions:{
    //     changeCity(ctx,city){
    //         ctx.commit('changeCity',city)
    //     }
    // },
    mutations:{
        changeCity(state,city){
            state.city=city
        }
    }
})