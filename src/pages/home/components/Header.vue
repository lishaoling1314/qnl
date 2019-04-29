<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-ico">&#xe605;</div></div>
        <div class="header-input">
            <span class="iconfont search-ico">&#xe632;</span>
            <input type="text" placeholder="请输入城市/景点/游玩主题">
        </div>
        <div class="header-right">城市<span class="iconfont arrow-ico">&#xe64a;</span></div>
    </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<!---43px=.86rem-->
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    display:flex
    line-height:.8rem
    background:$bgcolor
    color:#fff
.header-left
    width: 0.7rem
    float: left
.back-ico
    text-align:center
    font-size:0.3rem
.header-input
    flex:1
    background:#fff
    border-radius:.1rem
    margin-top :1%
    height:.65rem
    line-height:.55rem
    padding-left :.1rem
.search-ico
    color:#ccc
    font-size:.25rem
.header-right
    width: 1rem
    float: right
    text-align:center
.arrow-ico
    margin-left:0.05rem
    font-size:0.18rem
</style>

