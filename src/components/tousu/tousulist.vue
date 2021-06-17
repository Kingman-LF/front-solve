<template>
    <div class="boxs myborder">
        <div class="disx" :style="{height:height*lineNum + 'rem'}" id ="disx" 
          @mouseover="mouseOver"
          @mouseleave="mouseLeave">
            <div class="ul" :style = {transform:transform} :class="{ul_unanim:num===0}">
                <div class="li" v-for="(item,index) in contentArr" 
                :key=index 
                :style="{height:height+'rem'}"
                @click="showtk(item)">
                    <div class="cont">{{item.tsContent}}</div>
                    <div class="date">{{item.tsHandleTerm}}</div>
                    <div class="agency">{{item.tsHandlingStatus}}</div>
                </div>
                <div class="li" v-for="(item,index) in contentArr" :key=index+contentArr.length :style="{height:height+'rem'}" @click="showtk(item)">
                    <div class="cont">{{item.tsContent}}</div>
                    <div class="date">{{item.tsHandleTerm}}</div>
                    <div class="agency">{{item.tsHandlingStatus}}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {overdue} from "@/assets/api/tousu"
export default {
  props: {
    height: {
      default: 4.5,
      type: Number
    },
    lineNum: {
      default: 2,
      type: Number
    }
  },
  data: function () {
    return {
      contentArr: [],
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
        if (_this.num !== _this.contentArr.length) {
          _this.num++
        } else {
          _this.num = 0
        }
      }, 2000)
    },
    // 点击详情显示
    showtk(data){
      console.log(data);
      this.$emit("tkshow",data,false);
    }
  },
  mounted() {
    overdue({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
      let resdata=res.data;
      this.contentArr=resdata
      let _this = this
      _this.setint=setInterval(function () {
        if (_this.num !== _this.contentArr.length) {
          _this.num++
        } else {
          _this.num = 0
        }
      }, 2000)
    })
  },
  
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'rem)'
    }
  }
}
</script>
<style lang="scss" scoped>
.boxs {
    height: 12.33rem;
    margin-top: 1.1rem;
    border-radius: 4px;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    .disx{
        width: 100%;
        height: 7.75rem;
        display: inline-block;
        position:relative;
        overflow: hidden;
        .ul{
            height: 7.5rem;
            margin-top: 1rem;
            transition: 1s linear;
            .li{
                display: flex;
                justify-content: space-around;
                width: 100%;
                height: 4rem;
                line-height: 4rem;
                font-size: 2rem;
                font-family: PingFang SC;
                font-weight: bold;
                font-style: italic;
                cursor: pointer;
                color: #FFFFFF;
            }
            .li:hover{
              color: #00F0FF;
            }
            .type{
                width: 7rem;
            }
            .cont{
                width: 50rem;
                overflow:hidden; //超出的文本隐藏
                text-overflow:ellipsis; //溢出用省略号显示
                white-space:nowrap; //溢出不换行
            }
            .date{
                width: 13rem;
            }
            .agency{
                font-size: 1.67rem;
                color: #FF9000;
            }
        }
        .ul_unanim{
            transition: none
        }
    }
    
}
</style>