<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-banner></detail-banner>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
export default {
    name:'Ditail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>

<style lang="stylus" scoped>
.detail
    position:relative

.content
    height:50rem
</style>