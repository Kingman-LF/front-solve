<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>舆情监测数</p>
    </div>

    <div id="jcs"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "jcs",
  mounted() {
    this.jcs();
  },
  methods: {
    jcs() {
      let jcs = document.getElementById("jcs");
      let jcsChart = echarts.init(jcs);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 7754;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:35,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
              // console.log(e);
            }
          },
          legend: {
            left: 'center',
            // width:"100%",
            // itemWidth:'3',
            // itemHeight:'10',
            textStyle:{
              color:"#fff",
              fontSize: '1.5rem',
              fontFamily: "PingFang SC",
              fontWeight: "bold"
            },
          },
          graphic: [
                {
                  tooltip: {
                    textStyle: {
                      fontSize:35,
                    },
                    formatter(e){
                      return `总量：${gailanTotal}`
                    }
                  },
                  type: "text",
                  left: "center",
                  top: "center",
                  z: 10,
                  style: {
                    fill: "#fff",
                    textAlign: "center",
                    textVerticalAlign:'bottom',
                    text: ["{value|" + gailanTotal + "}"],
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '3rem',
                        // lineHeight: 30,
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12"
                      },
                    },
                  },
                },
              ],
          series: [
            {
              type: "pie",
              radius: ["50%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              textAlign:'center',
              label: {
                show: false,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                formatter(e){
                  // console.log(e)
                  return `${e.name}\n${e.value}个 ${e.percent}%`
                }
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [

                    "#E71515",
                    "#0B36C3",
                    "#59F7C3",

                  ];
                  return colorlist[params.dataIndex];
                },
              },
              // labelLine: {
              //   show: true,
              //   length: 10,
              //   length2: 5
              // },
              data: [
                { value:2000, name: "负面信息" },
                { value: 2800, name: "中性信息" },
                { value: 3640, name: "正面信息" }
              ],
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(jcsChart, true, true);
    },
  },
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 40rem;
  border-radius:4px;
  #jcs{
    margin-top: 1rem;
    height: 33.6rem;
  }
}
</style>