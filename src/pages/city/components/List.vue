<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <h3>您的位置</h3>
                <ul class="mp-list">
                    <li>北京</li>
                </ul>
            </div>
            <div class="area">
                <h3>热门城市</h3>
                <ul class="mp-list">
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                </ul>
            </div>
            <div class="area">
                <h3>A</h3>
                <ul class="local-list">
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                </ul>
            </div>
            <div class="area">
                <h3>B</h3>
                <ul class="local-list">
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                    <li>北京</li>
                    <li>西安</li>
                    <li>三亚</li>
                </ul>
            </div>      
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
    overflow:hidden
    position:absolute
    top:1.5rem
    left:0
    right:0
    bottom:0
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

