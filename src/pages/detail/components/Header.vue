<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont back-ico">&#xe605;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'DetailHeader'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    width:100%
    padding:2% 0
    position:absolute
    top:0
    left:0
    z-index:2
.back-ico
    display: block
    width: .72rem
    line-height: .72rem
    color:$whitecolor
    font-size:0.4rem
    background:rgba(0,0,0,0.5)
    border-radius 50%
    text-align:center
</style>
