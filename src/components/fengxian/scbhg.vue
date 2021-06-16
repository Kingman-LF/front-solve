<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>广告发布类型排名</p>
    </div>
    <div id="scbhg"></div>
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>广告违法地区分布</p>
    </div>
    <div id="ggwfdqfb"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {

  mounted() {
    //广告发布类型排名
    this.$nextTick(() => {
      this.scbhg();
    }, 500);
    //广告违法地区分布
    this.$nextTick(() => {
      setTimeout(() => {
        this.ggwfdqfb();
      }, 500);
    });
  },
  methods: {
    // 广告发布类型排名
    scbhg() {
      let scbhg = document.getElementById("scbhg");
      let scbhgChart = echarts.init(scbhg);
      function zhuzhuangDuidie(charts, rotate) {
        charts.clear();
        let option = {
          tooltip: {
            trigger: "axis",
            textStyle: {
              fontSize:26,
            },
            axisPointer: {
              type: "shadow",
            },
          },

          legend: {
            top:"5%",
            textStyle: {
              color: "#fff",
              fontfamily: "PingFang",
              fontweight: "bold",
              fontSize:20,
            },
            itemWidth:50,
            itemHeight:20,
            data: ["违法广告", "正常"],
          },
          grid: {
            top: "15%",
            left: "3%",
            right: "4%",
            width: "90%",
            height: "80%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: rotate ? rotate : 30,
              color: "#fff",
              fontSize:'1.5rem',
              fontfamily: "PingFang",
              fontweight: "bold",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
              },
            },
            data: ["非商业类", "普通服务类", "普通商品类", "金融服务类", "形象宣传类", "房地产类", "知识产品类"],
          },
          yAxis: {
            type: "value",
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255, 0.1)",
                fontSize:'1.5rem',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.4)",
                fontSize:'1.5rem',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "#fff",
              fontSize:'1.5rem',
            },
          },
          series: [
            {
              name: "正常",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              color:new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(120,255,182, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(120,255,182, 0)" // 100% 处的颜色
            }], false),
            fontSize:'1.5rem',
              emphasis: {
                focus: "series",
              },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: "违法广告",
              type: "bar",
              stack: "total",
              barWidth: 30,
              label: {
                show: false,
              },
              fontSize:'1.5rem',
              color:"rgba(127,60,249)",
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },


          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      zhuzhuangDuidie(scbhgChart);
    },
    //广告违法地区分布
    ggwfdqfb() {
      let ggwfdqfb = document.getElementById("ggwfdqfb");
      let ggwfdqfbChart = echarts.init(ggwfdqfb);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 16078;
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
                  left: "30%",
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
                { value: 8113, name: "湖州市本机" },
                { value: 2464, name: "德清县" },
                { value: 1433, name: "长兴县" },
                { value: 4068, name: "安吉县" },
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
