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
            @click="showDetail(item.id)"
        >
          <div>{{ item.nr }}</div>
          <div>{{ item.fkxq }}</div>
          <div>
            <span class="luntan">{{ item.jbsj }}</span>
            <span class="times">{{ item.fkqk }}</span>
            <span class="times">{{ item.zbqk }}</span>
          </div>
        </li>
        <li v-for="(item,index) in listArr" :key=index+listArr.length
            :style="{height:height+'rem'}"
            @click="showDetail(item.id)"
        >
          <div>{{ item.nr }}</div>
          <div>{{ item.fkxq}}</div>
          <div>
            <span class="luntan">{{ item.jbsj }}</span>
            <span class="times">{{ item.fkqk }}</span>
            <span class="times">{{ item.zbqk }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { warnSentiment } from "@/assets/api/yuqing";
export default {
  name: "yjyq",
  props: {
    height: {
      default: 16,
      type: Number
    },
    lineNum: {
      default: 2,
      type: Number
    }
  },
  data(){
    return{
      listArr:[],
      num: 0
    }
  },
  mounted() {
    this.warnSentiment()
  },
  methods: {
    showDetail(id){
      console.log(id)
      this.$emit("showDetail",id);
    },
    // 预警舆情
    warnSentiment() {
      warnSentiment({}).then(res => {
        if(res.code === 200) {
          this.listArr = res.data.filter(item => {
            if(item.fkqk === "未反馈"){
              return item;
            }
          })
          console.log(this.listArr)
          let _this = this
          _this.setint=setInterval(function () {
            if (_this.num !== _this.listArr.length) {
              _this.num++
            } else {
              _this.num = 0
            }
          }, 3000)
        }else {
          this.$message.error(res.message)
        }
      })
    },
    // // 移入停止
    mouseOver(){
    //   clearInterval(this.setint);
    },
    // // 移出轮播
    mouseLeave(){
    //   let _this = this
    //   _this.setint=setInterval(function () {
    //     if (_this.num !== _this.listArr.length) {
    //       _this.num++
    //     } else {
    //       _this.num = 0
    //     }
    //   }, 3000)
    }
  },
  computed: {
    transform: function () {
      return 'translateY(-' + this.num * this.height + 'rem)'
    }
  },
  created: function () {

  },
}
</script>

<style scoped lang="scss">
.myborder{
  height: 40rem;
  border-radius:4px;
  overflow: hidden;
  .yj_list{
    width: 100%;
    height:29rem;
    margin:1.5rem 0 1rem 0rem;
    //overflow: auto;
    display: inline-block;
    position:relative;
    overflow: hidden;
    .ul{
      //height: ;
      transition: 1s linear;
      overflow: hidden;
      li{
        list-style:none;
        cursor: pointer;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        font-size: 2rem;
        div{
          height: 4rem;
          width: 100%;
          &:nth-child(1){
            //height:1.58rem;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            word-break: break-all;
          }
          &:nth-child(2){
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            word-break: break-all;
          }
          &:nth-child(3){
            //height: 1.5rem;
            float: right;
            padding-top:1.58rem;
            //overflow: hidden;
            span{
              font-size: 1.5rem;
              display: block;
              float: right;
              overflow: hidden;
              padding-right:2rem;
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
