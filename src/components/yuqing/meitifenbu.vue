<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>舆情监测媒体分布</p>
    </div>

    <div id="mtfb"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getPorSevenData2,getDate2} from '@/utils/date'
import {common} from "@/assets/api/yuqing"

export default {
  name: "meitifenbu",
  mounted() {
    this.common()
  },
  methods:{
    common(){
       common({method:'ECharts_pie_Test!list.do',btime:getPorSevenData2(),etime:getDate2()}).then(res => {
         let resdata=res.data.SOURCETYPE
        //  console.log(resdata);

         this.num=0
         resdata.forEach((v,i) => {
          this.num+=Number(v.value) 
         });
        //  console.log(this.num,resdata);
         this.$nextTick(() => {
          // setTimeout(() => {
            this.mtfb(resdata,this.num);
          // }, 500);
        });
       })
     },
    mtfb(datas,num) {
      let mtfb = document.getElementById("mtfb");
      let mtfbChart = echarts.init(mtfb);
      function huanzhuang(charts, showLable, mygraphic,datas,num) {
        charts.clear();
        let gailanTotal = num;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:35,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:20px;height:20px;border-radius:20px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
            }
          },
          legend: {
            show: false,
          },
          graphic: mygraphic
              ? [
                {
                  tooltip: {
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
                    text: ["{value|" + gailanTotal + "}"].join(
                        "\n"
                    ),
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '3rem',
                        lineHeight: 30,
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12"
                      },
                      name: {
                        color: "#909399",
                        lineHeight: 30,
                        fontSize: '2rem',
                      },
                    },
                    font: "16px PingFang",
                  },
                },
              ]
              : [],
          series: [
            {
              type: "pie",
              radius: ["40%", "60%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
              },
              itemStyle: {
                color: function (params) {
                  var colorlist = [
                    "#0F5ED6",
                    "#79FFB5",
                    "#843DFF",
                    "#4304B1",
                    "#688FD8",
                    "#F25334",
                    "#49A732",
                    "#EB3633",
                    "#FCBD01",
                    "",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle:{
                  width:3,
                }
              },
              data: datas,
            },
            {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(mtfbChart, true, true,datas,num);
    },
  }
}
</script>

<style scoped lang="scss">
.myborder {
  height: 40rem;
  border-radius: 4px;
  #mtfb{
    margin-top: 1rem;
    height: 33.6rem;
  }
}
</style>