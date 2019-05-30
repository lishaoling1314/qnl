<template>
    <div class="list">
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
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'CityList'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
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
    border-bottom:1px solid #ccc
</style>

