<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                class="search-item" 
                v-for="item of list" 
                :key="item.id"
                @click="handleCityClick(item.name)"
                >
                {{item.name}}
                </li>
                <li class="search-item" v-show="!list.length">
                    没有相关匹配数据
                </li><!--加上这条是为了优化,当list长度为0时,则显示这条小提示-->
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
    name:'CitySearch',
    props:{
        cities:""
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)/**这里vuex本来用dispatch,现改成commit**/
            this.$router.push('/')/****用路由器点击返回首页****/
        }
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            /*****如果关键词不存在,this.list变成空数组*****/
            if(!this.keyword){
                this.list=[];
                return
            }
            this.timer=setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1)
                        {
                            result.push(value)
                        }
                    })
                }
                this.list=result
            },100)
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.search
    height:.72rem
    background:$bgcolor
    padding:0 .1rem
.search .search-input
    background:#fff
    width:96%
    text-align:center
    line-height:.62rem
    height:.62rem
    border-radius:.05rem
    padding:0 2%
.search-content
    overflow:hidden
    position:absolute
    top:1.52rem
    left:0
    right:0
    bottom:0
    background:#eee
    z-index:1
.search-item
    line-height:.6rem
    padding-left:.2rem
    color:#666
    background:#fff
    border-bottom:1px solid #ede8e8
</style>

