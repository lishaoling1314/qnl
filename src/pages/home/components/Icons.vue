<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showIcons">
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
    name:'HomeIcons',
    props:{
        list:Array
    },
    data(){
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop:true
            }
        }
    },
    computed:{
        /******几个图标数据,每一个轮播8个,计算出有几个轮播*****/
        pages(){
            const pages=[]
            this.list.forEach((item,index)=>{
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        },
        showIcons(){
            return this.list.length
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

