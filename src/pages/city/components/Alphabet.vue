<template>
    <div class="list">
        <ul>
            <li 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStar"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:{}
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    data(){
        return{
             touchStatus:false,
             startY:0,
             timer:null
        }
    },
    //为了让性能提高，startY,就计算一次
    updated(){
        //A元素对应顶部的高度
        this.startY=this.$refs['A'][0].offsetTop;
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerHTML) //子组件可以用this.$emit触发父组件事件
        },
        handleTouchStar(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    const startY=this.$refs['A'][0].offsetTop　//第一个Ａ距离"您的位置"的高度
                    const touchY=e.touches[0].clientY-79 
                    //e.touches[0].clientY手指离最顶部的高度,
                    //79是顶部蓝色部分的高度
                    //得出来的touchY就是手指距离"您的位置"的高度（中间距离）
                    const index=Math.floor((touchY-this.startY)/20) //20是各li的高度
                    console.log(touchY,index)
                    if(index>=0 && index<this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        },
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

