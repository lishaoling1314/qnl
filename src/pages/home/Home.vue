<template>
<div>
  <home-header></home-header><!--要加个'-'-->
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <div>http://piao.qunar.com/touch/</div>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style>
</style>
