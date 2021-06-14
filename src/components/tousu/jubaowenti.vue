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
import {sortKey,jubaowenti} from "@/assets/api/tousu"

export default {
  mounted() {
    jubaowenti({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
      let resdata=res.data;
      console.log(resdata);
      this.dataList=[]
      let num=0;
      let sums=0;
      sortKey(resdata,'value')
      resdata.forEach((v,i) => {
        sums+=v.value;
        if(v.name.substring(0,4)==="违反其他"||v.name.substring(0,2)==="其他"){
          resdata.splice(i,1)
        }else if(num<10){
          num+=1;
          this.dataList.push(v)
        }
      });
      this.sums=sums
      this.$nextTick(() => {
      // setTimeout(() => {
        this.jubaowentis(this.dataList,this.sums);
      // }, 500);
    });
    })
    
  },
  methods: {
    jubaowentis(data,sum) {
      let jubaowentis = document.getElementById("jubaowentis");
      let jubaowentisChart = echarts.init(jubaowentis);
      function huanzhuang(charts, showLable, mygraphic,data,sum) {
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
              data: data,
            },
            {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(jubaowentisChart, true, true,data,sum);
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