<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>特种设备分布</p>
    </div>
    <div id="num"></div>
    <div class="total">
      <h3>特种设备总数：<span>116039</span></h3>
      <div class="i"><span>锅炉<i></i></span>1292</div>
      <div class="i"><span>压力容器<i></i></span>28220</div>
      <div class="i"><span>电梯<i></i></span>42049</div>
      <div class="i"><span>起重机械<i></i></span>20209</div>
      <div class="i"><span>场内车辆<i></i></span>21957</div>
      <div class="i"><span>大型游乐设施<i></i></span>196</div>
      <div class="i"><span>压力管道<i></i></span>2108</div>
      <div class="i"><span>客运索道<i></i></span>8</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import huzJson from "./huz";
export default {
  name: "tsdjd",
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.num();
      }, 500);
    });
  },
  methods: {
    // 中间分布
    num() {
      let num = document.getElementById("num");
      let numChart = echarts.init(num);
      function miduFenbu(charts, echarts) {
        charts.clear();
        // charts.showLoading();
        echarts.registerMap("huz", huzJson);
        let option = {
          title: {
            show: false,
          },
          tooltip: {
            trigger: "item",
            textStyle: {
              fontSize:26,
            },
            formatter: e => {
              var r
              switch (e.name){
                case "吴兴区":
                  r = `${e.name}<br>锅炉：145<br>压力容器：4011<br>电梯：9741<br>起重机械：3799<br>场内车辆：2172<br>大型游乐设施：13<br>压力管道：131<br>客运索道：3`
                  break;
                case "南浔区":
                  r = `${e.name}<br>锅炉：337<br>压力容器：6665<br>电梯：5158<br>起重机械：2804<br>场内车辆：5145<br>大型游乐设施：7<br>压力管道：405<br>客运索道：0`
                  break;
                case "南太湖新区":
                  r = `${e.name}<br>锅炉：52<br>压力容器：2201<br>电梯：6733<br>起重机械：1700<br>场内车辆：846<br>大型游乐设施：22<br>压力管道：262<br>客运索道：0`
                  break;
                case "长兴县":
                  r = `${e.name}<br>锅炉：194<br>压力容器：6287<br>电梯：6768<br>起重机械：3920<br>场内车辆：5666<br>大型游乐设施：75<br>压力管道：361<br>客运索道：0`
                  break;
                case "安吉县":
                  r = `${e.name}<br>锅炉：375<br>压力容器：2895<br>电梯：7073<br>起重机械：2173<br>场内车辆：3770<br>大型游乐设施：61<br>压力管道：497<br>客运索道：4`
                  break;
                case "德清县":
                  r = `${e.name}<br>锅炉：189<br>压力容器：6161<br>电梯：6576<br>起重机械：5813<br>场内车辆：4358<br>大型游乐设施：18<br>压力管道：452<br>客运索道：1`
                  break;
              }
              return r
            },
          },
          visualMap: {
            min: 10000,
            max: 25000,
            right:0,
            bottom:"20",
            // text: ['最高', '最低'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue', '#3A9FE7', '#1367F4']
            },
            textStyle:{
              color:'#ffffff'
            }

          },
          series: [
            {
              name:"区县指数",
              type: "map",
              mapType: "huz", // 自定义扩展图表类型
              label: {
                show: true,
                color:'#ffffff',
                fontSize:'2rem',
                fontFamily:'PingFang Bold',
                // offset:[-20,1],
                emphasis: {//对应的鼠标悬浮效果
                  show: true,
                  textStyle:{color:"#FFFFFF"},
                }
              },

              data: [
                { name: "吴兴区", value: 20007,label:{offset:[-70,40]} },
                { name: "南浔区", value: 19481 },
                { name: "长兴县", value: 23238 },
                { name: "德清县", value: 23473 },
                { name: "南太湖新区", value: 11767,label:{offset:[-20,0]} },
                { name: "安吉县", value: 16798},
              ],
              // 自定义名称映射
              itemStyle: {
                // normal: {
                //   borderWidth: .5,//区域边框宽度
                //   borderColor: '#00f0ff',//区域边框颜色
                //   areaColor:"#DCDCDC",//区域颜色
                //   fontSize: 'trem'
                //
                // },
                emphasis: {
                  color:'#ffffff',
                  areaColor:"#00ffa3",
                }
              },
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      miduFenbu(numChart, echarts);
    },
    mokuaiC(item) {
      switch (item.id){
        case 1:
          this.$router.push({path:'/tousu'})
          break;
        case 2:
          this.$router.push({path:'/fengxian'})
          break;
        case 3:
          this.$router.push({path:'/jiufen'})
          break;
        case 4:
          this.$router.push({path:'/shigu'})
          break;
        case 5:
          window.location.href='http://tsgz.istarshine.com/#/userLogin?token=fdee4086-d3ad-422b-9e59-6682df580f85&type=token&goback=false';
          break;
      }
    },
    // // 自定义名称映射
    // itemStyle: {
    //   areaColor: "rgba(0, 0, 0, 0.37)",
    // },
  },
}
</script>

<style lang="scss" scoped>
.box{
  height: 60rem;
  position: relative;
  #num{
    height: 54rem;
  }
  .total{
    position: absolute;
    left: 2rem;
    top: 7rem;
    color: #FFFFFF;
    font-size: 1.5rem;
    font-family: "PingFang SC";
    h3{
      font-size: 2rem;
      margin-bottom: 2.08rem;
      span{
        font-size: 2.5rem;
        font-family: digifaw;
        text-shadow: 0rem 0rem 1rem #fff;
        font-weight: 400;
        margin-left: 2rem;
      }
    }
    .i{
      display: flex;
      height: 1.5rem;
      overflow: hidden;
      align-items: center;
      margin-bottom: 1.83rem;
      font-family: digifaw;
      text-shadow: 0rem 0rem 1rem #fff;
      font-weight: 400;
      &:before{
        content: "";
        width: 0.17rem;
        height: 1.5rem;
        background-color: #00F0FF;
        margin-right: 0.5rem;
      }
      span{
        display: inline-block;
        text-align:justify;
        width: 10rem;
        height: 1.5rem;
        line-height: 1.5rem;
        font-family: "PingFang SC";
        text-shadow: none;
        margin-right: 2rem;
        i{
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
}

</style>

