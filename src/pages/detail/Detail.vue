<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-banner></detail-banner>
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
</style>