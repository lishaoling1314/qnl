<template>
    <div class="weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li
            v-for="wk of list" 
            :key="wk.id"
            >
                <img :src="wk.imgUrl">
                <div class="text">
                    <h3>{{wk.desc}}</h3>
                    <p>{{wk.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Homeweekend',
    props:{
        list:Array
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.weekend .title
    padding:4% 2%
    font-size:0.35rem
.weekend ul li
    background:#fff
    overflow:hidden
.weekend li img 
    width:100%
.weekend li .text
    padding:3% 2%
.weekend li h3
    font-size:0.32rem
    ellipsis()
.weekend li p
    line-height:0.6rem
    color:#666
    ellipsis()
</style>


