<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>重点案件地区分布</p>
    </div>
    <div id="map"></div>
<!--    <div class="data">-->
<!--      <div class="t">标题:湖州某房地产公司延迟支付违约金等等等啊实打实大苏打</div>-->
<!--      <div class="c">内容分类:住房保障与房地产-房地产开发管理</div>-->
<!--      <div class="area">地区：吴兴</div>-->
<!--      <div class="date">时间:2021-5-21 16:54:00</div>-->
<!--    </div>-->
  </div>
</template>

<script>
import * as echarts from "echarts";
import huzJson from "@/utils/huz";

export default {
  name: "zdaj",
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.mtop();
      }, 500);
    });
  },
  methods:{
    mtop() {
      let mtop = document.getElementById("map");
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
                fontSize:'2rem',
                fontFamily:'PingFang Bold',
                emphasis: {//对应的鼠标悬浮效果
                  show: true,
                  textStyle:{color:"#FFFFFF"}
                }
              },

              data: [
                { name: "吴兴区", value: 42400,label:{offset:[-70,40]} },
                { name: "南浔区", value: 3 },
                { name: "长兴县", value: 26058 },
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
      miduFenbu(mtopChart, echarts);
    },
  }
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 60.58rem;
  .title{
    width: 27.17rem;
  }
  #map{
    height: 60.58rem;
    top:-5.3rem
  }
}
</style>
