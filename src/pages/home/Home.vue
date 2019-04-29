<template>
<div>
  <home-header></home-header><!--要加个'-'-->
  <home-swiper></home-swiper>
  <div>http://piao.qunar.com/touch/</div>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style>
</style>
