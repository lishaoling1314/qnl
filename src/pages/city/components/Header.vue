<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left"><div class="iconfont back-ico">&#xe605;</div></div>
        </router-link>
        <div class="title">城市选择</div>
        <div class="city-container">
            
        </div>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    line-height:$headerheight
    background:$bgcolor
    color:$whitecolor
    position:relative
.header-left
    width: 0.7rem
    float: left
    position:absolute
    left:0
    top:0
    color:$whitecolor
.header .title
    flex-grow:1
    text-align:center
    font-size:.32rem
.back-ico
    text-align:center
    font-size:0.3rem
</style>
