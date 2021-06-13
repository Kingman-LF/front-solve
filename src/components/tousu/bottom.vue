<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>被投诉对象 TOP10</p>
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>投诉人 TOP10</p>
    </div>
    <div class="list">
      <span
        v-for="(item, index) in topList"
        :key="item.id"
        :class="tabIndex === index ? 'current' : ''"
        @click="clickF(item, index)"
        >{{ item.text }}</span>
    </div>
    <div id="be_complained"></div>
    <div id="complainant"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import {bottomleft} from "@/assets/api/tousu"

export default {
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          name:'HZS',
          text: "湖州市",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['王先生', '李先生', '杨女士', '金先生', '朱女士', '褚锡炯', '庄晓清', '慎先生', '陈女士', '史先生'],
          complainantYData:[9, 7, 5, 5, 5, 4, 4, 4, 4, 4],
        },
        {
          id: Math.random(),
          name:'WX',
          text: "吴兴区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['陈女士', '陈先生', '刘女士', '陈女士', '王女士', '潘先生', '姜女士', '潘女士', '慎先生', '李女士'],
          complainantYData:[4, 3, 3, 3, 3, 3, 3, 3, 3, 2],
        },
        {
          id: Math.random(),
          name:'NX',
          text: "南浔区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['朱女士', '朱女士', '王先生', '贾女士', '鲁先生', '黄先生', '梁女士', '黄先生', '吴先生', '胡女士'],
          complainantYData:[4, 3, 3, 2, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          name:'DQ',
          text: "德清县",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['朱女士', '朱女士', '王先生', '贾女士', '鲁先生', '黄先生', '梁女士', '黄先生', '吴先生', '胡女士'],
          complainantYData:[3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          name:'CX',
          text: "长兴县",
          be_complainedXData:[],
          be_complainedYData:[126, 101, 57, 49, 38, 18, 15, 13, 8, 8],
          complainantXData:['杨女士', '金先生', '卫先生', '汤先生', '王先生', '张先生', '赵女士', '刘先生', '鲍先生', '徐女士'],
          complainantYData:[5, 5, 4, 3, 3, 3, 3, 3, 3, 3],
        },
        {
          id: Math.random(),
          name:'AJ',
          text: "安吉县",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['李先生', '某先生', '黄女士', '王女士', '赵女士', '范红', '傅先生', '陈女士', '某先生', '白先生'],
          complainantYData:[4, 3, 3, 2, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          name:'NTHXQ',
          text: "南太湖新区",
          be_complainedXData:[],
          be_complainedYData:[],
          complainantXData:['李先生'],
          complainantYData:[1],
        },
      ],
    };
  },
  mounted() {
    bottomleft({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
      for (const i in res.data) {
        this.topList.forEach((v,j) => {
          if(i===v.name){
            v.be_complainedXData=res.data[i].names
            v.be_complainedYData=res.data[i].values
          }
        });
      }
      let complained = document.getElementById("be_complained");
      this.complainedChart = echarts.init(complained);
      let complainant = document.getElementById("complainant");
      this.complainantChart = echarts.init(complainant);
      this.zhuzhuangtu2(this.complainedChart);
      this.zhuzhuangtu2(this.complainantChart);
    })
    // bottomleft({startTime: "2021-06-07",endTime: "2021-06-08"}).then(res => {
    //   for (const i in res.data) {
    //     this.topList.forEach((v,j) => {
    //       if(i===v.name){
    //         v.be_complainedXData=res.data[i].names
    //         v.be_complainedYData=res.data[i].values
    //       }
    //     });
    //   }
    //   let complained = document.getElementById("be_complained");
    //   this.complainedChart = echarts.init(complained);
    //   let complainant = document.getElementById("complainant");
    //   this.complainantChart = echarts.init(complainant);
    //   this.zhuzhuangtu2(this.complainedChart);
    //   this.zhuzhuangtu2(this.complainantChart);
    // })
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
      this.zhuzhuangtu2(this.complainedChart);
      this.zhuzhuangtu2(this.complainantChart);
    },
    zhuzhuangtu2(charts, xdata, ydata,color, rotate) {
      if(charts._dom.id==='be_complained'){
        var xData = this.topList[this.tabIndex].be_complainedXData
        var yData = this.topList[this.tabIndex].be_complainedYData
        var colors = color ? color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
              },{
              offset: 0,
              color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false)
      }else{
        var xData = this.topList[this.tabIndex].complainantXData
        var yData = this.topList[this.tabIndex].complainantYData
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
        tooltip: {
          trigger: "axis",
          borderWidth:0,
          textStyle: {
            fontSize:26,
          },
          axisPointer: {
                type: 'shadow',
            },
          formatter(e){
            return `${e[0].name}：${e[0].value}次`
          }
        },  
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
            fontSize:"1.5rem",
            color: "#fff",
            fontfamily: 'PingFang',
            fontweight: 'bold',
            formatter(e){
                if(e.length>4){
                  return (e.slice(0,4)+"...")
                }else{
                  return e
                }
              }
          },
          nameLocation:"middle",
          data: xData
        },
        yAxis: {
          splitLine: {
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
          containLabel: true,
          
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

    }
    
  },
  
}
</script>
<style lang="scss" scoped>
.myborder {
  width: 117rem;
  height: 31.83rem;
  border-radius: 4px;
  .list{
    width: 70%;
    height: 4rem;
    margin: 1rem auto;
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
  #be_complained{
    width: 55rem;
    height: 19.83rem;
    float: left;
  }
  #complainant{
    width: 55rem;
    height: 19.83rem;
    float: right;
  }
}
</style>