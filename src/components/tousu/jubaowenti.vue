<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>举报问题类别</p>
    </div>
    <div id="jubaowentis"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.jubaowentis();
      }, 500);
    });
  },
  methods: {
    jubaowentis() {
      let jubaowentis = document.getElementById("jubaowentis");
      let jubaowentisChart = echarts.init(jubaowentis);
      function huanzhuang(charts, showLable, mygraphic) {
        charts.clear();
        let gailanTotal = 1337;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
              // console.log(e.name.length);
            }
          },
          legend: {
            // show: false,
            // type:"scroll",
            // pageIconColor:"#fff",
            orient: 'vertical',
            left: '70%',
            top:'center',
            textStyle:{
              color:"#fff",
              fontSize: '1.5rem',
            },
            itemWidth:10,
            itemHeight:10,
            formatter(e){
              if(e.length>4){
                return (e.slice(0,4)+"...")
              }else{
                return e
              }
                // console.log(e);
            }
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
                  left: "23%",
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
                        fontWeight: "bold",
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
              center: ["35%", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: false,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem'
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
              //   // length: 20,
              //   // length2: 10
              // },
              data: [
                { value: 289, name: "违法登记管理行为" },
                { value: 187, name: "侵害消费者权益行为" },
                { value: 156, name: "其他" },
                { value: 152, name: "广告行为违法" },
                { value: 140, name: "违反食品安全法法规" },
                { value: 110, name: "价格违法行为" },
                { value: 79, name: "违反个体私营登记管理违规" },
                { value: 40, name: "产品质量违法行为" },
                { value: 26, name: "不正当竞争行为" },
                { value: 25, name: "其他市场监管领域违法行为" },
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
      huanzhuang(jubaowentisChart, true, true);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder {
  width: 38.33rem;
  height: 36.67rem;
  border-radius: 4px;
  #jubaowentis{
    margin-top: 1rem;
    height: 30rem;
  }
}
</style>