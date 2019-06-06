<template>
    <div class="list">
        <ul>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
            <li>A</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CityAlphabet',
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    right:0;
    top:1.58rem
    bottom:0
    width:.4rem
.list li
    text-align:center
    line-height:0.4rem
</style>

