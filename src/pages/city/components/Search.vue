<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name:'CitySearch'
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
</style>

