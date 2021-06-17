<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>行政复议地区分布</p>
    </div>
    <div id="fuyi"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getYearStartDate, getNowDate, getDate } from "@/utils/date";
import { reconsideration } from "@/assets/api/jiufen";
export default {
  name: "xzfyfb",
  mounted() {
    reconsideration({
      startTime: getDate("2018-01-01"),
      endTime: getNowDate(),
    }).then((res) => {
      let resdata = res.data;
      let resdatas=[
              { value: 0, name: "市本级" },
              { value: 0, name: "吴兴区" },
              { value: 0, name: "南浔区" },
              { value: 0, name: "德清县" },
              { value: 0, name: "长兴县" },
              { value: 0, name: "安吉县" },
              { value: 0, name: "南太湖新区" },
            ]
      let num=0
      let obj={}
      resdata.forEach((v,i) => {
        num+=Number(v.value)
        obj[v.area]={value:v.value}
      });
        for (const key in obj) {
          if(key.indexOf('市局')!==-1){
              resdatas[0].value+=Number(obj[key].value)
          }else if(key.indexOf('安吉')!==-1){
            resdatas[5].value+=Number(obj[key].value)
          }else if(key.indexOf('长兴')!==-1){
            resdatas[4].value+=Number(obj[key].value)
          }else if(key.indexOf('德清')!==-1){
            resdatas[3].value+=Number(obj[key].value)
          }else if(key.indexOf('南浔')!==-1){
            resdatas[2].value+=Number(obj[key].value)
          }else if(key.indexOf('吴兴')!==-1){
            resdatas[1].value+=Number(obj[key].value)
          }else if(key.indexOf('南太湖')!==-1||key.indexOf('开发')!==-1){
            resdatas[6].value+=Number(obj[key].value)
          }
        }
      let fuyi = document.getElementById("fuyi");
      let fuyiChart = echarts.init(fuyi);
      this.huanzhuang1(fuyiChart,num);
    });
    
  },
  methods: {
    huanzhuang1(charts,num, showLable, mygraphic) {
      charts.clear();
      let gailanTotal = num;
      let option = {
        tooltip: {
          trigger: "item",
          borderWidth: 0,
          textStyle: {
            fontSize: 26,
          },
          formatter(e) {
            return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`;
            // console.log(e);
          },
        },
        legend: {
          // show: false
          orient: "horizontal",
          left: "50%",
          top: "center",
          textStyle: {
            color: "#fff",
            fontSize: "1.5rem",
          },
        },
        graphic: [
          {
            tooltip: {
              formatter(e) {
                return `总计：${gailanTotal}`;
              },
            },
            type: "text",
            left: "18%",
            top: "center",
            z: 10,
            style: {
              fill: "#fff",
              textAlign: "center",
              text: ["{value|" + gailanTotal + "}"].join("\n"),
              rich: {
                value: {
                  color: "#303133",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  fontFamily: "digifaw",
                  textShadowColor: "#0096ff",
                  textShadowBlur: "12",
                },
                name: {
                  color: "#909399",
                  lineHeight: 30,
                  fontSize: "2rem",
                },
              },
              font: "16px PingFang",
            },
          },
        ],
        series: [
          {
            name: "行政复议",
            type: "pie",
            radius: ["50%", "75%"],
            center: ["25%", "center"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              color: "#fff",
              fontFamily: "PingFang SC",
              fontSize: "1.5rem",
              formatter(e) {
                return `${e.name}\n${e.value}个 ${e.percent}%`;
              },
            },
            itemStyle: {
              color: function (params) {
                var colorlist = [
                  "#fc8452",
                  "#5470c6",
                  "#91cc75",
                  "#fac858",
                  "#ee6666",
                  "#73c0de",
                  "#3ba272",
                ];
                return colorlist[params.dataIndex];
              },
            },
            labelLine: {
              show: true,
              length: 20,
              length2: 20,
            },
            data: [
              { value: 3, name: "市本级" },
              { value: 10, name: "吴兴区" },
              { value: 5, name: "南浔区" },
              { value: 29, name: "德清县" },
              { value: 22, name: "长兴县" },
              { value: 24, name: "安吉县" },
              { value: 4, name: "南太湖新区" },
            ],
          },
          {},
        ],
      };
      option && charts.setOption(option);
      window.addEventListener("resize", function () {
        charts.resize();
      });
    },
  },
};
</script>

<style scoped>
.myborder {
  height: 27.67rem;
  border-radius: 4px;
}
#fuyi {
  margin-top: 1rem;
  height: 19.62rem;
}
</style>
