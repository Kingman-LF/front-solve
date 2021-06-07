<template>
  <div class="middle">
    <div class="mbtn">
      <div
        v-for="item in mokuaiList"
        :key="item.id"
        @click.stop="mokuaiC(item)"
      >
        <span class="innerTitle">{{ item.text }}</span>
      </div>
    </div>
    <div class="box">
      <div id="mtop"></div>
      <img :src="require('@/assets/images/shouye/tc1.png')" alt="">
      <div class="quans">
        <div class="quan1"></div>
        <div class="quan2"></div>
        <div class="quan3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import huzJson from "@/utils/huz.js"
export default {
  data() {
    return {
      mokuaiTab: 0,
      mokuaiList: [
        {
          id: 1,
          text: "投诉调处",
        },
        {
          id: 3,
          text: "纠纷化解",
        },
        {
          id: 2,
          text: "风险管控",
        },
        {
          id: 5,
          text: "舆情监测",
        },
        {
          id: 4,
          text: "事故防控",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.mtop();
      }, 500);
    });
  },
  methods: {
    // 中间分布
    mtop() {
      let mtop = document.getElementById("mtop");
      let mtopChart = echarts.init(mtop);
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
            formatter: "{b}<br/>{c}",
          },
          visualMap: {
            show:false,
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['#46b1e3', '#0a59f7']
            },
            textStyle:{
              color:"#ffffff",

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
                fontSize:16,
                fontFamily:'PingFang Bold',
                emphasis: {//对应的鼠标悬浮效果
                  show: true,
                  textStyle:{color:"#FFFFFF"}
                }
              },

              data: [
                { name: "吴兴区", value: 42400 },
                { name: "南浔区", value: 3 },
                { name: "长兴县", value: 26058 },
                { name: "德清县", value: 10800 },
                { name: "南太湖新区", value: 320 },
                { name: "安吉县", value: 2 },
              ],
              // 自定义名称映射
              itemStyle: {
                normal: {
                  borderWidth: .5,//区域边框宽度
                  borderColor: '#00f0ff',//区域边框颜色
                  areaColor:"#DCDCDC",//区域颜色

                },
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
      miduFenbu(mtopChart, echarts);
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
  },
};
</script>
<style lang="scss" scoped>
.middle {
  width: 116rem;
  margin:0 15rem;
  .box {
    height: 70rem;
    margin-bottom: 0rem;
    position: relative;
    padding: 0 20px;
    #mtop{
      height: 65rem;
      z-index: 10;
    }
    img{
      width: 61.75rem;
      height: 31.42rem;
      position: absolute;
      top: 27.6rem;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  .mbtn {
    display: flex;
    box-sizing: border-box;
    padding: 0rem 1.75rem;
    margin-top: 5rem;
    justify-content: space-between;
    div {
      width: 21.92rem;
      height: 8.25rem;
      background-size: 100% 100%;
      background-image: url("~@/assets/images/shouye/jx14.png");
      cursor: pointer;
      span {
        display: block;
        text-align: center;
        line-height: 8.25rem;
        font-size: 3.33rem;
        font-family: PingFang SC;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
      }
    }
    div:hover{
      background-image: url("~@/assets/images/shouye/jx13.png");
    }
  }
}
.quans{
  width: 123.46rem;
  height: 123.46rem;
  position: relative;
  bottom: 70rem;
  left: 0;
  right: 0;
  margin: auto;
  transform: rotateX(80deg);
  z-index: 1;
  .quan1{
    position: absolute;
    margin: auto;
    width: 0;
    height: 0;
    border-width: 0;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    border-radius: 100%;
    border-style: solid;
    border-color:rgba(0,240,255,1);
    animation:quna1 6s infinite linear;
  }
  .quan2{
    position: absolute;
    margin: auto;
    width: 0;
    height: 0;
    border-width: 0;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    border-radius: 100%;

    border-style: solid;
    border-color:rgba(0,240,255,1);
    animation:quna1 6s infinite 2s linear;
  }
  .quan3{
    position: absolute;
    margin: auto;
    width: 0;
    height: 0;
    border-width: 0;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    border-radius: 100%;
    border-style: solid;
    border-color:rgba(0,240,255,1);
    animation:quna1 6s infinite 4s linear;
  }
  @keyframes quna1 {
    0% {border-width: 0;border-color:rgba(0,240,255,1);width: 0;height: 0}
    100% {border-width: 10rem;border-color:rgba(0,240,255,.0);width: 123.46rem;height: 123.46rem}
  }
}
</style>
