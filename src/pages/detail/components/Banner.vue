<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1901/d2/d20386fec7943deba3.img.jpg_600x330_ed99f76c.jpg" alt="">
            <div class="banner-info">
                <div class="banner-number"><i class="iconfont pic-ico">&#xe626;</i>39</div>
                <div class="banner-title">厦门科技馆</div>
            </div>
        </div>
        <common-gallary :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name:'Banner',
    data () {
        return {
            showGallary:false,
            imgs: [
                'https://dimg07.c-ctrip.com/images/w30q0o000000eq7z17747.jpg_Z_800_600.jpg',
                'https://dimg07.c-ctrip.com/images/w3060o000000ep39r71C6.jpg_Z_800_600.jpg'
            ]
        }
    },
    components:{
        CommonGallary
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    overflow:hidden
    height:0
    padding-bottom:55%
    position:relative
    .banner-info
        position:absolute
        bottom:0
        left:0;
        width:90%
        padding:2% 5%
        color:#fff
        background-color: transparent;
        background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
        background-image: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
        background-image: -moz-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
        background-image: -o-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
        background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
        font-size:20px
    .banner-number
        background: rgba(0,0,0,.5);
        width:0.6rem
        line-height:0.3rem
        text-align:center
        border-radius 0.2rem
        font-size:0.15rem
        margin-bottom:1%
        .pic-ico
            margin-right:10%
</style>