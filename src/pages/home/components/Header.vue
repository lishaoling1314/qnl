<template>
    <div class="header">
        <div class="header-left"><div class="iconfont back-ico">&#xe605;</div></div>
        <div class="header-input">
            <span class="iconfont search-ico">&#xe632;</span>
            <input type="text" placeholder="请输入城市/景点/游玩主题">
        </div>
        <router-link to='/city'>
            <div class="header-right">{{this.city}}<span class="iconfont arrow-ico">&#xe64a;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>

<!---43px=.86rem-->
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    display:flex
    line-height:$headerheight
    background:$bgcolor
    color:$whitecolor
.header-left
    width: 0.7rem
    float: left
.back-ico
    text-align:center
    font-size:0.3rem
.header-input
    flex:1
    background:$whitecolor
    border-radius:.1rem
    margin-top :1%
    height:.65rem
    line-height:.55rem
    padding-left :2%
.header-input input
    width:90%
.search-ico
    color:#ccc
    font-size:.25rem
.header-right
    width: 1rem
    float: right
    text-align:center
    color:$whitecolor
.arrow-ico
    margin-left:0.05rem
    font-size:0.18rem
</style>

