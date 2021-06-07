<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>被举报对象 TOP10</p>
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>举报人 TOP10</p>
    </div>
    <div class="list">
      <span
        v-for="(item, index) in topList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.text }}</span>
    </div>
    <div id="be_complained2"></div>
    <div id="complainant2"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          text: "湖州市",
        },
        {
          id: Math.random(),
          text: "吴兴区",
        },
        {
          id: Math.random(),
          text: "南浔区",
        },
        {
          id: Math.random(),
          text: "德清县",
        },
        {
          id: Math.random(),
          text: "长兴县",
        },
        {
          id: Math.random(),
          text: "安吉县",
        },
        {
          id: Math.random(),
          text: "南太湖新区",
        },
      ]
    };
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
    },
    zhuzhuangtu3(charts, color, xdata, ydata, rotate) {
        if(charts._dom.id==='be_complained2'){
            var xData = xdata ? xdata : ['棋牌室', '永辉超市', '德清乡巴...', '某店家', '奥园', '老太婆粥摊', '世纪华联...', '安吉浙北...', '中石化加...', '废旧轮胎...']
            var yData = ydata ? ydata : [10, 10, 7, 5, 4, 4, 4, 4, 4, 4]
            var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
        }else{
            var xData = xdata ? xdata : ['张学战', '周敏姐', '吴健松', '许红霞', '田先生', '储一铜', '胡女士', '徐达', '杰先生', '王伟']
            var yData = ydata ? ydata : [30, 18, 16, 8, 7, 5, 4, 4, 3, 3]
            var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
            offset: 0,
            color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
        }
        charts.clear()
        let option = {
            xAxis: {
              type: 'category',
              axisLine: {
                  lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
                  }
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  interval: 0,
                  rotate: 30,
                  color: "#fff",
                  fontSize:"1.5rem",
                  fontfamily: 'PingFang',
                  fontweight: 'bold',
              },
              data: xData
            },
            yAxis: {
              splitLine: {
                fontSize:"1.5rem",
                lineStyle: {
                type: 'dashed',
                color: 'rgba(255, 255, 255, 0.1)'
                }
              },
            
              axisLine: {
                  show: true,
                  lineStyle: {
                  color: 'rgba(255, 255, 255, 0.4)'
                  }
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  color: "#fff",
                  fontfamily: 'PingFang',
                  fontweight: 'bold',
                  fontSize:"1.5rem"
              },
              type: 'value',
            },
            grid: {
              top: '15%',
              left: '5%',
              right: '4%',
              height: '85%',
              containLabel: true
            },
            series: [{
              data: yData,
                type: 'bar',
                barWidth: "60%",
                color: colors,
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize:"1.5rem"
                },
            }]
        }
        option && charts.setOption(option)
        window.addEventListener('resize', function () {
            charts.resize()
        })

    },
  },
  mounted() {
    let complained2 = document.getElementById("be_complained2");
    let complainedChart2 = echarts.init(complained2);
    this.zhuzhuangtu3(complainedChart2);
    let complainant2 = document.getElementById("complainant2");
    let complainantChart2 = echarts.init(complainant2);
    this.zhuzhuangtu3(complainantChart2);
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 117rem;
  height: 40rem;
  .list{
    width: 70%;
    height: 4rem;
    margin: 0 auto;
    span{
      display: block;
      float: left;
      cursor: pointer;
      width: 14.1%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #969696;
      opacity: 0.8;
    }
    span:hover{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
    .current{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
  }
  #be_complained2{
    width: 55rem;
    height: 27rem;
    float: left;
  }
  #complainant2{
    width: 55rem;
    height: 27rem;
    float: right;
  }
}
</style>