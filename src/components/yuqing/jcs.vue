<template>
  <div class="myborder">
    <div class="title" @click.stop="jcsTitle">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>舆情监测倾向性统计</p>
    </div>

    <div id="jcs"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { sentimentMonitor } from "@/assets/api/yuqing"
export default {
  name: "jcs",
  mounted() {
    this.$nextTick(() =>{
      setTimeout(() => {
        this.sentimentMonitor()
      },500)
    })
  },
  methods: {
    jcsTitle() {
      this.$emit("jcsTitle")
    },
    sentimentMonitor() {
      sentimentMonitor({}).then(res => {
        if(res.code === 200) {
          let sum = 0
          res.data.forEach(ele => {
            sum += Number(ele.value)
          })
          this.jcs(res.data,sum);
        }else {
          this.$message.error(res.message)
        }
      })
    },
    jcs(datas,num) {
      let jcs = document.getElementById("jcs");
      let jcsChart = echarts.init(jcs);
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
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
            }
          },
          legend: {
            left: 'center',
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
              data: datas,
            },
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(jcsChart, true, true,datas,num);
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