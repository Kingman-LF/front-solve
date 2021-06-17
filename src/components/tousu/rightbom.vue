<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>被举报对象 TOP10</p>
      <img :src="require('@/assets/images/titlelogo.png')" alt="" />
      <p>举报人 TOP10</p>
    </div>
    <div class="list">
      <span
        v-for="(item, index) in areaList"
        :key="item.id"
        :class="{current:areaCode === item.areaCode,hasData:obj[item.areaCode] && obj[item.areaCode].names.length>0}"
        @click="clickF(item, index)"
        >{{ item.name }}</span>
    </div>
    <div id="be_complained2"></div>
    <div id="complainant2"></div>
  </div>
</template>
<script>
import * as echarts from "echarts"
import {passiveReporter,reporter} from "@/assets/api/tousu"
import {getYearStartDate,getNowDate,getDate} from "@/utils/date"
export default {
  data() {
    return {
      areaCode: "HZS",
      areaList:[
        {name:"湖州市",areaCode:"HZS"},
        {name:"吴兴区",areaCode:"WX"},
        {name:"南浔区",areaCode:"NX"},
        {name:"德清县",areaCode:"DQ"},
        {name:"长兴县",areaCode:"CX"},
        {name:"安吉县",areaCode:"AJ"},
        {name:"南太湖新区",areaCode:"NTHXQ"},
      ],
      obj:[],
      peo:[],
      phones:[]
    };
  },
  mounted() {
    this.getData()
    // let complained2 =
    this.complainedChart2 = echarts.init(document.getElementById("be_complained2"));
    // this.zhuzhuangtu3(this.complainedChart2);
    // let complainant2 = document.getElementById("complainant2");
    this.complainantChart2 = echarts.init(complainant2);
    // this.zhuzhuangtu3(this.complainantChart2);
  },
  methods: {
    getData(){
      passiveReporter({startTime:getYearStartDate(),endTime:getNowDate()}).then(res => {
        this.obj = res.data
        let xData = this.obj[this.areaCode].names,
            yData = this.obj[this.areaCode].values;
        this.zhuzhuangtu3(this.complainedChart2,xData,yData,1)
      })
      reporter({startTime:getYearStartDate(),endTime:getNowDate()}).then(res => {
        this.peo = res.data
        this.peo[this.areaCode].names.forEach((v,i) => {
          this.peo[this.areaCode].names[i]=v.slice(0,1)+'某某'
        });
        let xData = this.peo[this.areaCode].names,
            yData = this.peo[this.areaCode].values;
        this.phones=this.peo[this.areaCode].phones
        
        this.zhuzhuangtu3(this.complainantChart2,xData,yData,2,this.phones)
      })
    },
    clickF(item, index) {
      if(this.obj[item.areaCode].names.length === 0) return
      this.areaCode = item.areaCode;
      // console.log(this.obj[this.areaCode])
      let xData1 = this.obj[this.areaCode].names,
          yData1 = this.obj[this.areaCode].values;
      this.zhuzhuangtu3(this.complainedChart2,xData1,yData1,1)

      this.peo[this.areaCode].names.forEach((v,i) => {
          this.peo[this.areaCode].names[i]=v.slice(0,1)+'某某'
        });
      let xData2 = this.peo[this.areaCode].names,
          yData2 = this.peo[this.areaCode].values;
      this.phones=this.peo[this.areaCode].phones
      this.zhuzhuangtu3(this.complainantChart2,xData2,yData2,2,this.phones)
    },
    zhuzhuangtu3(charts,xData, yData,nam,phones) {
      let thit=this;
      charts.clear()
      let option = {
        tooltip: {
          trigger: "axis",
          borderWidth:0,
          textStyle: {
            fontSize:26,
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
              color: "#fff",
              fontSize:"1.5rem",
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
          nameTextStyle:{
            verticalAlign:"middle",
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
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 1,
              color: "rgba(0, 240, 255, 1)" // 100% 处的颜色
            },{
              offset: 0,
              color: "rgba(0, 240, 255, 0)" // 100% 处的颜色
            }], false),
            label: {
                show: true,
                position: 'top',
                color: '#fff',
                fontSize:"1.5rem"
            },
        }]
      }
      option && charts.setOption(option)
      charts.on('click', function (params) {
            // console.log(params);
            // thit.dialogTableVisible = true;
            if(nam===1){
              var data = {
                tsType:"投诉",
                tsDefendantName:params.name,
                pageNo:0,
                pageSize:10
              }
              thit.$emit("tkshow", true,data);
            }else{
              var data = {
                tsType:"投诉",
                tsInformation:phones[params.dataIndex],
                pageNo:0,
                pageSize:10
              }
              thit.$emit("tkshow", true,data);
            }
        });
      window.addEventListener('resize', function () {
          charts.resize()
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.myborder {
  width: 117rem;
  height: 40rem;
  border-radius: 4px;
  .list{
    width: 70%;
    height: 4rem;
    margin: 1rem auto;
    span{
      display: block;
      float: left;
      cursor: not-allowed;
      width: 14.1%;
      height: 4rem;
      text-align: center;
      line-height: 4rem;
      font-size: 1.5rem;
      font-family: "PingFang SC";
      font-weight: bold;
      color: #969696;
    }
    span.hasData:hover{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
      cursor: pointer;
    }
    .current{
      color: #fff;
      text-shadow:0rem 0rem .5rem #00f0ff;
    }
  }
  #be_complained2{
    width: 55rem;
    height: 28rem;
    float: left;
  }
  #complainant2{
    width: 55rem;
    height: 28rem;
    float: right;
  }
}
</style>
