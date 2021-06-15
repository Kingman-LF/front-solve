<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉问题类别</p>
    </div>
    <div id="tousuissue"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import {getYearStartDate,getNowDate,getDate} from '@/utils/date'
import {sortKey,tousuwenti} from "@/assets/api/tousu"

export default {
  mounted() {
    tousuwenti({startTime: getYearStartDate(),endTime: getNowDate()}).then(res => {
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
      setTimeout(() => {
        this.tousuissue(this.dataList,this.sums);
      }, 500);
    });
    })
    
  },
  methods: {
    tousuissue(data,sum) {
      let thit=this;
      let tousuissue = document.getElementById("tousuissue");
      let tousuissueChart = echarts.init(tousuissue);
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
              //   show: false,
              //   length: 20,
              //   length2: 10
              // },
              data: data,
            },
            {},
          ],
        };
        option && charts.setOption(option);
        charts.on('click', function (params) {
            console.log(params);
            // thit.dialogTableVisible = true;
            var data = {
              tsType:"投诉",
              tsNatureType:params.name
            }
            thit.$emit("tkshow", true,data);
        });
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(tousuissueChart, true, true,data,sum);
    },
  },
};
</script>
<style lang="scss" scoped>
.myborder {
  width: 38.33rem;
  height: 36.67rem;
  border-radius: 4px;
  #tousuissue{
    margin-top: 1rem;
    height: 30rem;
  }
}
</style>