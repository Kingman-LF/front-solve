<template>
    <div class="boxs myborder">
        <div class="disx" :style="{height:height*lineNum + 'rem'}" id ="disx">
            <div class="ul" :style = {transform:transform} :class="{ul_unanim:num===0}">
                <div v-for="(item,index) in contentArr" :key=index :style="{height:height+'rem'}">
                    <div class="type">{{item.tsType}}</div>
                    <div class="cont">内容:{{item.cont.length>7?item.cont.slice(0,7)+"...":item.cont}}</div>
                    <div class="date">时间:{{item.tsHandleTerm}}</div>
                    <div class="agency">{{item.tsHandlingStatus}}</div>
                </div>
                <div v-for="(item,index) in contentArr" :key=index+contentArr.length :style="{height:height+'rem'}">
                    <div class="type">{{item.tsType}}</div>
                    <div class="cont">内容:{{item.cont.length>7?item.cont.slice(0,7)+"...":item.cont}}</div>
                    <div class="date">时间:{{item.tsHandleTerm}}</div>
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
      default: 4,
      type: Number
    },
    lineNum: {
      default: 2,
      type: Number
    }
  },
  data: function () {
    return {
      contentArr: [
                    {type:'投诉',category:'质量',cont:'1xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'2xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'3xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'4xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'5xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'6xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}, 
                    {type:'投诉',category:'质量',cont:'7xxxxxxxxx....',date:'2021-6-2 12:00:00',agency:'待办理',}
                ],
      num: 0
    }
  },
  mounted() {
    overdue({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
      let resdata=res.data;
      console.log(resdata);
      // this.contentArr=resdata
    })
  },
  
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'rem)'
    }
  },
  created: function () {
    let _this = this
    setInterval(function () {
      if (_this.num !== _this.contentArr.length) {
        _this.num++
      } else {
        _this.num = 0
      }
    }, 2000)
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
        height: 7.75rem;
        display: inline-block;
        position:relative;
        overflow: hidden;
        .ul{
            height: 7.5rem;
            margin-top: 1rem;
            transition: 1s linear;
            div{
                float: left;
                height: 4rem;
                line-height: 4rem;
                font-size: 2rem;
                font-family: PingFang SC;
                font-weight: bold;
                font-style: italic;
                color: #FFFFFF;
            }
            .type{
                width: 7rem;
            }
            .category{
                width: 16rem;
            }
            .cont{
                width: 20rem;
            }
            .date{
                width: 26rem;
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