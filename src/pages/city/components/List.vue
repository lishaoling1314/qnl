<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <h3>您的位置</h3>
                <ul class="mp-list">
                    <li>{{this.$store.state.city}}</li>
                </ul>
            </div>
            <div class="area">
                <h3>热门城市</h3>
                <ul class="mp-list">
                    <li
                    v-for="item of hot"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                    >
                    {{item.name}}
                    </li>
                </ul>
            </div>
            <div 
                class="area" 
                v-for="(item,key) of cities" 
                :key="key"
                :ref="key"
            ><!--v-for="{数组,对象,数字} of cities"-->
                <h3>{{key}}</h3>
                <ul class="local-list">
                    <li 
                    v-for="i of item" 
                    :key="i.id"
                    @click="handleCityClick(i.name)"
                    >
                    {{i.name}}
                    </li>
                </ul>
            </div>    
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot:Array,//热门城市
        cities:{},
        letter:String
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)/**这里vuex本来用dispatch,现改成commit**/
            this.$router.push('/')/****用路由器点击返回首页****/
        }
    },
    watch:{//watch监听
      letter(){
        //当点击哪个字母就显示哪块
        if(this.letter){//当letter
            const element=this.$refs[this.letter][0];//获取出来是个数组，所以加个［0］就取出第一个值
            //console.log(element);
            this.scroll.scrollToElement(element)
        }
      }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper) //better-sccroll插件
    },
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
    overflow:hidden
    position:absolute
    max-width:720px;
    top:1.5rem
    left:0
    right:0
    bottom:0
    margin:0 auto
.area h3
    line-height:.6rem
    padding:0 .2rem
    background:#eee
.mp-list
    padding:0 .2rem .2rem
    display:flex  
    display:-webkit-flex
    -webkit-flex-wrap:wrap;
    flex-wrap:wrap
    justify-content:space-between
.mp-list li
    width:30%
    border:1px solid #ccc
    border-radius:.05rem
    text-align:center
    line-height:.6rem
    margin-top:0.2rem
.local-list li
    line-height:.6rem
    padding-left:2%
    border-bottom:1px solid #f6f3f3
.local-list li:nth-last-child(1)
    border-bottom:none
</style>

