<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>广告违法类型排名</p>
    </div>
    <div id="scbhg"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>广告监测地区分布</p>
    </div>
    <div id="ggwfdqfb"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {

  mounted() {
    //广告违法类型排名
    this.$nextTick(() => {
      this.scbhg();
    }, 500);
    //广告监测地区分布
    this.$nextTick(() => {
      setTimeout(() => {
        this.ggwfdqfb();
      }, 500);
    });
  },
  methods: {
    // 广告违法类型排名
    scbhg() {
      let scbhg = document.getElementById("scbhg");
      let scbhgChart = echarts.init(scbhg);
      function zhuzhuangDuidie(charts, rotate) {
        let colors = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            axisPointer: {
              type: "shadow",
            },
            formatter(e){
              return `${e[0].name}：${e[0].value}`
            }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize:'1.5rem',
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 30,
              fontSize:"1.5rem",
              color: "#fff",
              fontfamily: 'PingFang',
              fontweight: 'bold',
              formatter(e){
                if(e.length>5){
                  return (e.slice(0,5)+"...")
                }else{
                  return e
                }
              }
            },
            data: ["房地产类", "医疗服务类", "普通食品类", "教育培训服务类", "商业招商投资", "其它类"]
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.1)',
                fontSize:'1.5rem',
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize:'1.5rem',
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontfamily: 'PingFang',
              fontSize:"1.5rem",
              fontweight: 'bold'
            },
            type: 'value',

          },
          grid: {
            top: '15%',
            left: '5%',
            right: '4%',
            height: '80%',
            containLabel: true
          },
          series: [{
            data: [1, 11, 4, 6, 2, 1],
            type: 'bar',
            barWidth: "60%",
            color: colors,
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize:'1.5rem',
            },


          }]
        }
        
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(scbhgChart);
    },
    //广告监测地区分布
    ggwfdqfb() {
      let ggwfdqfb = document.getElementById("ggwfdqfb");
      let ggwfdqfbChart = echarts.init(ggwfdqfb);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 10210;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
              // console.log(e);
            }
          },
          legend: {
            // show: false,
            orient: 'vertical',
            left: '70%',
            top:'center',
            textStyle:{
              color:"#fff",
              fontSize: '2rem',
            },
            // formatter(e){
            //   if(e.length>4){
            //     return (e.slice(0,4)+"...")
            //   }else{
            //     return e
            //   }
            // }
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
                  left: "28%",
                  top: "center",
                  z: 10,
                  style: {
                    fill: "#fff",
                    text: gailanTotal,
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
              radius: ["50%", "75%"],
              center: ["40%", "center"],
              // avoidLabelOverlap: false,
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
                    "#0F5ED6",
                    "#79FFB5",
                    "#843DFF",
                    "#4304B1",
                    "#688FD8",
                    "#F25334",
                    "#49A732",
                    "#EB3633",
                    "#FCBD01",
                    "#CAD9F0",
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
                { value: 7523, name: "市本级" },
                { value: 894, name: "德清县" },
                { value: 584, name: "长兴县" },
                { value: 1209, name: "安吉县" },
              ],
            },
            {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(ggwfdqfbChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder{
  height: 81.58rem;
  border-radius: 4px;
  #scbhg,#ggwfdqfb {
    height: 35rem;
    margin-top: 1rem;
  }
}

</style>
