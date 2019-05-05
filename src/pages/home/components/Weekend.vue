<template>
    <div class="weekend">
        <div class="title">热销推荐</div>
        <ul>
            <li v-for="wk of weekList" :key="wk.id">
                <img :src="wk.imgUrl">
                <div class="text">
                    <h3>{{wk.desc}}</h3>
                    <p>{{wk.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Homeweekend',
    data(){
        return{
            weekList:[{
                id:'0001',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/list5.jpg',
                desc:'长隆野生动物世界',
                text:'熊猫三胞胎与您共享欢乐时光熊猫三胞胎与您共享欢乐时光',
                price:'269'
            },{
                id:'0002',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/list6.jpg',
                desc:'长隆野生动物世界',
                text:'熊猫三胞胎与您共享欢乐时光熊猫三胞胎与您共享欢乐时光',
                price:'269'
            },{
                id:'0003',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/list5.jpg',
                desc:'长隆野生动物世界',
                text:'熊猫三胞胎与您共享欢乐时光熊猫三胞胎与您共享欢乐时光',
                price:'269'
            },{
                id:'0004',
                imgUrl:'https://lishaoling1314.github.io/qnl/src/assets/images/list6.jpg',
                desc:'长隆野生动物世界',
                text:'熊猫三胞胎与您共享欢乐时光熊猫三胞胎与您共享欢乐时光',
                price:'269'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.weekend .title
    padding:4% 2%
    font-size:0.35rem
.weekend ul li
    background:#fff
    overflow:hidden
.weekend li img 
    width:100%
.weekend li .text
    padding:3% 2%
.weekend li h3
    font-size:0.32rem
    ellipsis()
.weekend li p
    line-height:0.6rem
    color:#666
    ellipsis()
</style>


