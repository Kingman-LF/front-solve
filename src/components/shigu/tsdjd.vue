<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>故障量分布</p>
    </div>
    <div id="num"></div>
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
            formatter: "{b}<br/>{c}",
          },
          visualMap: {
            min: 800,
            max: 50000,
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
                { name: "吴兴区", value: 42400,label:{offset:[-70,40]} },
                { name: "南浔区", value: 300 },
                { name: "长兴县", value: 30060 },
                { name: "德清县", value: 10800 },
                { name: "南太湖新区", value: 320,label:{offset:[-20,0]} },
                { name: "安吉县", value: 2 },
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
  height: 80.92rem;
  #num{
    height: 70.92rem;
  }
}

</style>

