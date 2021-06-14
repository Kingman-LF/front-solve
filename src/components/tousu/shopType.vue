<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>商品类别投诉接收量TOP10</p>
    </div>
    <div id="shopType"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";

import {sortKey,shopTypes} from "@/assets/api/tousu"
export default {
  mounted() {
    shopTypes({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
      let resdata=res.data;
      this.dataList=[]
      let num=0;
      let sums=0;
      sortKey(resdata,'value')
      resdata.forEach((v,i) => {
        sums+=v.value;
        if(v.name.substring(0,2)==="其他"){
          resdata.splice(i,1)
        }else if(num<10){
          num+=1;
          this.dataList.push(v)
        }
      });
      this.sums=sums
      this.$nextTick(() => {
        // setTimeout(() => {
          this.shopType(this.dataList,this.sums);
        // }, 500);
      });
    })
  },
  methods: {
    date(){
        var date = new Date();
        // 本年的第一天
        var bn = date.getFullYear(); //年
        var bndytdate= new Date(`${bn}-01-01`);
        var ys = bndytdate.getFullYear(); //年
        var ms = bndytdate.getMonth() + 1; //月
        var ds = bndytdate.getDate(); //日
        console.log(ys + "-" + ms + "-" + ds);
        // 当前时间的前一天
        var preDate = new Date(date.getTime() - 24*60*60*1000); //前一天
        var y = preDate.getFullYear(); //年
        var m = preDate.getMonth() + 1; //月
        var d = preDate.getDate(); //日
        console.log(y + "-" + m + "-" + d);
    },
    shopType(datas,sum) {
      let thit=this;
      let shopType = document.getElementById("shopType");
      let shopTypeChart = echarts.init(shopType);
      huanzhuang(shopTypeChart, true, true,datas,sum);
      function huanzhuang(charts, showLable, mygraphic,datas,sum) {
        charts.clear();
        let gailanTotal = sum;
        let option = {
          tooltip: {
            trigger: "item",
            borderWidth:0,
            textStyle: {
              fontSize:26,
            },
            formatter(e){
              return `${e.name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e.color};display:inline-block"></div> ${e.value} ${e.percent}%`
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
                    text: gailanTotal,
                    textAlign: "center",
                    text: ["{value|" + gailanTotal + "}"],
                    rich: {
                      value: {
                        color: "#303133",
                        fontSize: '3rem',
                        lineHeight: 30,
                        fontFamily: "digifaw",
                        textShadowColor: "#0096ff",
                        textShadowBlur: "12",
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
              radius: ["45%", "70%"],
              center: ["center", "center"],
              // avoidLabelOverlap: false,
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
                // formatter(e){
                //   console.log(e)
                //   return `${e.name}`
                // }
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
              labelLine: {
                show: true,
                lineStyle:{
                  width:2
                }
                // length: 20,
                // length2: 10
              },
              data: datas,
            },
            {},
          ],
        };
        option && charts.setOption(option);
        shopTypeChart.on('click', function (params) {
            // console.log(params);
            // thit.dialogTableVisible = true;
            thit.$emit("tkshow", true,params);
        });
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder {
  width: 58rem;
  height: 31.5rem;
  border-radius: 4px;
  #shopType {
    margin-top: 1rem;
    height: 25rem;
  }
}
</style>