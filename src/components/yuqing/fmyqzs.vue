<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>负面舆情走势</p>
    </div>

    <div id="fmyqzs"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getentDate} from '@/utils/date'
// import yqLIst from '@/utils/1'

export default {
  name: "yqxqfb",
  mounted() {
    // this.yqInfo()
    this.$nextTick(() => {
        // setTimeout(() => {
          this.fmyqzs();
        // }, 500);
      });
  },
  methods: {
    yqInfo(){
      console.log(getentDate());
      let fmyuqing = []
      yqLIst.forEach((v,i) => {
        console.log(v.orientation);
        if(v.orientation==2){
          fmyuqing.push(v)
        }
      });
      console.log(fmyuqing);
      let objs={}
      fmyuqing.forEach((v,i) => {
        let str=v.collectTime.substring(0,8)
        console.log(str);
        // objs[]
        
      });
      this.$nextTick(() => {
        // setTimeout(() => {
          this.fmyqzs();
        // }, 500);
      });
    },
    fmyqzs(){
      var fmyqzs = document.getElementById('fmyqzs');
      var myChart = echarts.init(fmyqzs);
      function huanzhuang(charts, showLable, mygraphic){
        charts.clear();
        let option = {
          color: ['#00DDFF','#80FFA5', ],
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            borderWidth:0,
            textStyle: {
              fontSize:35,
            },
            formatter(e){
              return `${e[0].name}<br> <div style="width:18px;height:18px;border-radius:18px;background-color:${e[0].color};display:inline-block"></div> ${e[0].value}
                          `
              console.log(e);
            },
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            left:'right',
            textStyle: {
              color: "rgba(255, 255, 255)",
              fontSize: 20
            },
            itemWidth:50,
            itemHeight:20,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                }
              },
              axisLabel:{
                fontSize:"1.5rem",
                fontFamily:" PingFang Bold",
                fontWeight: "bold",
              },
              boundaryGap: false,
              data: ['6月3日', '6月4日', '6月5日', '6月7日', '6月8日','6月9日'],

            }
          ],
          yAxis: [
            {
              type: 'value',
              splitNumber:2,
              axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                }
              },
              axisLabel:{
                fontSize:"1.5rem",
                fontFamily:" PingFang",
                fontWeight: 'bold',
                color: '#FFFFFF',
              },
            }
          ],
          series: [
            {
              type: 'line',
              smooth: true,
              lineStyle: {
                width: 3
              },
              showSymbol: false,
              areaStyle: {
                // opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 221, 255,1)'
                }, {
                  offset: 1,
                  color: 'rgba(77, 119, 255,0)'
                }])
              },
              emphasis: {
                focus: 'series'
              },
              data: [600, 680, 400, 560, 580,400,300]
            }
          ]
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
      huanzhuang(myChart, true, true);
    }
  },
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 40rem;
  border-radius:4px;
  #fmyqzs{
    margin-top: 1rem;
    height: 33rem;
    padding-bottom:2.5rem;
  }
}
</style>