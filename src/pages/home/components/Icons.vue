<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="icon of page" :key="icon.id">
                    <div class="icon-img"><img :src="icon.imgUrl" alt=""></div>
                    <p>{{icon.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop:true
            },
            iconList:[{
                id:'0001',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico1.png',
                desc:'景点门票'
            },{
                id:'0002',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico2.png',
                desc:'广州必游'
            },{
                id:'0003',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico3.png',
                desc:'动植物园'
            },{
                id:'0004',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico4.png',
                desc:'自然风光'
            },{
                id:'0005',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico5.png',
                desc:'珠江夜游'
            },{
                id:'0006',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico6.png',
                desc:'泡温泉'
            },{
                id:'0007',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico7.png',
                desc:'一日游'
            },{
                id:'0008',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico8.png',
                desc:'长隆度假区'
            },{
                id:'0009',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico7.png',
                desc:'一日游'
            },{
                id:'00010',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/home-ico8.png',
                desc:'长隆度假区'
            }]
        }
    },
    computed:{
        /******几个图标数据,每一个轮播8个,计算出有几个轮播*****/
        pages(){
            const pages=[]
            this.iconList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.icons
    overflow:hidden
    padding:2% 0
    background:#fff
.icons >>> .swiper-pagination-bullet-active
    background:rgba(0,175,190,.8)
.icons >>> .swiper-pagination
    bottom:1%
    left:0
.icons >>> .swiper-container
    height:0;
    padding-bottom:50%;
.icon
    width:25%;
    height:0;
    float:left;
    text-align:center;
    font-size:0.3rem;
    padding-bottom:23%
.icon p
    color:$graycolor
    ellipsis()
.icon-img img
    width:60%;
    display:inline-block;
    margin:5% 0;
</style>

