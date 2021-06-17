<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>预警舆情</p>
    </div>
    
    <div class="yj_list" :style="{height:height*lineNum + 'rem'}" 
          @mouseover="mouseOver"
          @mouseleave="mouseLeave">
      <ul class="ul"  :style = {transform:transform} :class="{ul__unanim:num===0}">
        <li v-for="(item,index) in listArr" :key=index
        :style="{height:height+'rem'}"
        >
          <p>{{ item.txt }}</p>
          <p>
            <span class="times">{{ item.times }}</span>
            <span class="luntan">{{ item.luntan }}</span>
          </p>
        </li>
        <li v-for="(item,index) in listArr" :key=index+listArr.length
        :style="{height:height+'rem'}"
        >
          <p>{{ item.txt }}</p>
          <p>
            <span class="times">{{ item.times }}</span>
            <span class="luntan">{{ item.luntan }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "yjyq",
  props: {
    height: {
      default: 7,
      type: Number
    },
    lineNum: {
      default: 4,
      type: Number
    }
  },
  data(){
    return{
      listArr:[
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
        {txt:'健身房跑路已是一大顽疾',times:'3小时前',luntan:'南太湖论坛'},
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
        {txt:'健身房跑路已是一大顽疾',times:'3小时前',luntan:'南太湖论坛'},
        {txt:'最近听说不少健身房跑路，昨天还收钱，今天就怎样怎样',times:'4小时前',luntan:'南太湖论坛'},
      ],
      num: 0
    }
  },
  methods: {
    // 移入停止
    mouseOver(){
      clearInterval(this.setint);
    },
    // 移出轮播
    mouseLeave(){
      let _this = this
      _this.setint=setInterval(function () {
        if (_this.num !== _this.listArr.length) {
          _this.num++
        } else {
          _this.num = 0
        }
      }, 3000)
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'rem)'
    }
  },
  created: function () {
    let _this = this
    _this.setint=setInterval(function () {
      if (_this.num !== _this.listArr.length) {
        _this.num++
      } else {
        _this.num = 0
      }
    }, 3000)
  }
}
</script>

<style scoped lang="scss">
.myborder{
  height: 40rem;
  border-radius:4px;
  .yj_list{
    width: 100%;
    height:29rem;
    margin:3rem 0 1rem 0rem;
    overflow: auto;
    display: inline-block;
    position:relative;
    overflow: hidden;
    .ul{
      transition: 1s linear;
      overflow: hidden;
      li{
        list-style:none;
        cursor: pointer;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 1.5rem;
        // margin-bottom:4rem;
        p{
          &:nth-child(1){
            //height:1.58rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            word-break: break-all;
          }
          &:nth-child(2){
             height: 1.5rem;
             float: right;
            padding-top:1.58rem;
            .luntan{
              padding-left:3.25rem;
            }
           }
        }
      }
      li:hover{
        color: #00F0FF;
      }
    }
    .ul__unanim{
      transition: none
    }
  }
}
</style>