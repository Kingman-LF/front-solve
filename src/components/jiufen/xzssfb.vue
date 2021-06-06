<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>行政诉讼地区分布</p>
    </div>
    <div id="susong"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "xzssfb",
  mounted() {
    let susong = document.getElementById("susong");
    let susongChart = echarts.init(susong);
    this.huanzhuang(susongChart);
  },
  methods:{
    huanzhuang(charts, showLable, mygraphic) {
      charts.clear()
      let gailanTotal = 25656
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        graphic: [{
          type: 'text',
          left: '40%',
          top: '40%',
          z: 10,
          style: {
            fill: '#fff',
            textAlign: 'center',
            text: [
              `{name|总记}`,
              '{value|' + gailanTotal + '}',

            ].join('\n'),
            rich: {
              value: {
                color: '#303133',
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'PingFang'
              },
              name: {
                color: '#909399',
                lineHeight:30,
                fontSize: '2rem'
              },
            },
            font: '16px PingFang'
          }
        }],
        series: [
          {
            name: '行政诉讼',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ['46%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: "#fff",
              fontWeight: 'bold',
              fontFamily: 'PingFang Bold',
              fontSize: '1.5rem',
              formatter(e){
                console.log(e)
                return `${e.name}\n${e.value}个 ${e.percent}%`
              }
            },
            itemStyle: {
              color: function (params) {
                var colorlist = ['#fc8452', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'];
                return colorlist[params.dataIndex];
              },
            },
            labelLine: {
              show: true,
              length: 20,
              length2: 20,
            },
            data: [
              { value: 2, name: '市本级' },
              { value: 1, name: '吴兴区' },
              { value: 4, name: '长兴县' },
              { value: 3, name: '德清县' },
              { value: 0, name: '安吉县' },
              { value: 1, name: '南太湖新区' },
              { value: 1, name: '南浔区' },
            ]
          }, {

          }
        ]
      }
      option && charts.setOption(option)
      window.addEventListener('resize', function () {
        charts.resize()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#susong{
  height: 19rem;
}
</style>
