<template>
    <div class="list">
        <ul>
            <li v-for="(item,key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:{}
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    right:0
    top:1.58rem
    bottom:0
    width:.4rem
.list li
    text-align:center
    line-height:0.4rem
    color:#00bcd4
</style>

