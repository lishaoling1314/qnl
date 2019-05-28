<template>
    <div class="recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li v-for="rd of list" :key="rd.id">
                <img :src="rd.imgUrl">
                <span>
                    <h3>{{rd.title}}</h3>
                    <p>{{rd.desc}}</p>
                    <i><font>¥<em>{{rd.price}}</em></font>起</i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    },
    data(){
        return{}
    },
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.recommend .title
    padding:4% 2%
    font-size:0.35rem
.recommend ul li
    padding:2%
    background:#fff
    overflow:hidden
.recommend li img
    float:left
    width:30%
.recommend li span
    display:block
    width:68%;
    float:right;
    padding:2% 0
.recommend li h3
    font-size:0.32rem
.recommend li p
    line-height:0.4rem
    padding:4% 0
    color:#666
.recommend li i
    font-size: 0.24rem
    color:$graycolor
.recommend li font
     color:$redcolor
.recommend li em
    font-size:0.4rem
</style>


