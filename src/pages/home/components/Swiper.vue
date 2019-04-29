<template>
<div class="wrapper">
  <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img :src="item.imgUrl"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data() {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            loop:true
        },
        swiperList:[{
            id:'0001',
            imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/banner1.jpg',
        },{
            id:'0002',
            imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/banner2.jpg',
        }]
      }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
    width:100%
    height:0
    overflow:hidden
    padding-bottom:26.8%
    background:#eee
.swiper-slide img
    width:100%
</style>
