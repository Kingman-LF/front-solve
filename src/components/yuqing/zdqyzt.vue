<template>
  <div class="myborder">
    <div class="title">
      <img :src="require('../../assets/images/titlelogo.png')" alt="">
      <p>重点舆情专题</p>
      <div class="titList">
        <ul>
          <li
              v-for="(item,index) in list"
              :key="item.id"
              :class="tabIndex===index?'current1':''"
              @click="tabFn(item,index)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>

    <div class="con">
      <div class="first">
        <ul>
          <li v-for="(item,index) in list[tabIndex].orientation"
              :key="index">
            <p>{{item.name}}</p>
            <p>{{item.value}}</p>
          </li>
        </ul>
      </div>

      <div class="meitiBox">
        <span>媒体分布</span>
        <div id="meiti"></div>
      </div>


      <div class="fmyqzsBox">
        <span>舆情趋势</span>
        <div id="qushi"></div>
      </div>
    </div>

  </div>
</template>

<script>
import * as echarts from "echarts";

import {secreInfoArea} from "@/assets/api/yuqing"
export default {
  name: "zdqyzt",
  data(){
    return{
      tabIndex:0,
      list:[{
        name:"",
        orientation:[],

      }],
      titList:[
        {
            id:Math.random(),
            txt:'专题1',
            firstArr:[
              {info:'总数',num:55782},
              {info:'负面信息',num:55782},
              {info:'中性信息',num:55782},
              {info:'正面信息',num:55782}
            ],
            DataTxt:[
              {value:'16',name:'网媒'},
              {value:'15',name:'微博'},
              {value:'10',name:'微信'},
              {value:'20',name:'贴吧'},
              {value:'20',name:'论坛'},
              {value:'18',name:'小视频'},
              {value:'16',name:'网路视频'},
              {value:'8',name:'电视视频'},
              {value:'25',name:'App'},
              {value:'0',name:'报刊'},
              {value:'13',name:'其他'}
            ],
          xData:['6月10日','6月11日','6月12日','6月13日','6月14日','6月15日','6月16日'],
            yData: [520, 530, 470, 490, 600,500,490,500]
        },
        {
          id:Math.random(),
          txt:'专题2',
          firstArr:[
            {info:'总数',num:55782},
            {info:'负面信息',num:54782},
            {info:'中性信息',num:58782},
            {info:'正面信息',num:53782}
          ],
          DataTxt:[
            {value:'18',name:'网媒'},
            {value:'15',name:'微博'},
            {value:'10',name:'微信'},
            {value:'30',name:'贴吧'},
            {value:'20',name:'论坛'},
            {value:'18',name:'小视频'},
            {value:'19',name:'网路视频'},
            {value:'8',name:'电视视频'},
            {value:'24',name:'App'},
            {value:'0',name:'报刊'},
            {value:'13',name:'其他'}
          ],
          xData:['6月10日','6月11日','6月12日','6月13日','6月14日','6月15日','6月16日'],
          yData: [510, 520, 440, 470, 590,480,500]
        }
      ]
    }
  },
  mounted() {
    let meiti = document.getElementById("meiti");
    this.meitiChart = echarts.init(meiti);
    // this.huanzhuang(this.meitiChart);

    let qushi = document.getElementById('qushi');
    this.qushiChart = echarts.init(qushi);
    // this.bolang(this.qushiChart);

    this.getData()
  },
  methods:{
    getData(){
      secreInfoArea({}).then(res => {
        let list = res.data.mapList.map(item => {
          // 处理倾向性
          if(item.orientation.length){
            let obj = [
              {name:"总数",value:0},
              {name:"正面信息",value:0},
              {name:"中性信息",value:0},
              {name:"负面信息",value:0},
            ]
            item.orientation.forEach(item => {
              if(item.name === "正面"){
                obj[0].value += item.value;
                obj[1].value = item.value;
              };
              if(item.name === "中性"){
                obj[0].value += item.value;
                obj[2].value = item.value;
              }
              if(item.name === "中性"){
                obj[0].value += item.value;
                obj[3].value = item.value;
              }
            })
            item.orientation = obj
          }else{
            item.orientation = [
              {name:"总数",value:0},
              {name:"正面信息",value:0},
              {name:"中性信息",value:0},
              {name:"负面信息",value:0},
            ]
          }
          // 处理媒体来源
          if(item.sourceType.length){
            let obj = [
              {value:'0',name:'网媒'},
              {value:'0',name:'微博'},
              {value:'0',name:'微信'},
              {value:'0',name:'贴吧'},
              {value:'0',name:'论坛'},
              {value:'0',name:'小视频'},
              {value:'0',name:'网路视频'},
              {value:'0',name:'电视视频'},
              {value:'0',name:'App'},
              {value:'0',name:'报刊'},
              {value:'0',name:'其他'}
            ]
            item.sourceType.forEach(item => {
              if(item.name === "网媒"){
                obj[0].value = item.value;
              }
              if(item.name === "微博"){
                obj[1].value = item.value;
              }
              if(item.name === "微信"){
                obj[2].value = item.value;
              }
              if(item.name === "贴吧"){
                obj[3].value = item.value;
              }
              if(item.name === "论坛"){
                obj[4].value = item.value;
              }
              if(item.name === "小视频"){
                obj[5].value = item.value;
              }
              if(item.name === "网路视频"){
                obj[6].value = item.value;
              }
              if(item.name === "电视视频"){
                obj[7].value = item.value;
              }
              if(item.name === "App"){
                obj[8].value = item.value;
              }
              if(item.name === "报刊"){
                obj[9].value = item.value;
              }
              if(item.name === "其他"){
                obj[10].value = item.value;
              }
            })
            item.sourceType = obj
          }else{
            item.sourceType = [
              {value:'0',name:'网媒'},
              {value:'0',name:'微博'},
              {value:'0',name:'微信'},
              {value:'0',name:'贴吧'},
              {value:'0',name:'论坛'},
              {value:'0',name:'小视频'},
              {value:'0',name:'网路视频'},
              {value:'0',name:'电视视频'},
              {value:'0',name:'App'},
              {value:'0',name:'报刊'},
              {value:'0',name:'其他'}
            ]
          }
          return item
        })

        this.list = list;
        this.huanzhuang(this.meitiChart);
        this.bolang(this.qushiChart);
      })
    },
    tabFn(item,index){
      this.tabIndex = index;
      this.huanzhuang(this.meitiChart);
      this.bolang(this.qushiChart);
    },
    huanzhuang(charts) {
      charts.clear();
      let gailanTotal = this.list[this.tabIndex].orientation[0].value;
      let option = {
        tooltip: {
          trigger: "item",
          borderWidth:0,
          textStyle: {
            fontSize:35,
          },
          formatter(e){
            return ` <div style="width:20px;height:20px;border-radius:20px;background-color:${e.color};display:inline-block"></div> ${e.name} ${e.value} ${e.percent}%`
            // console.log(e);
          }
        },
        legend: {
          show: false,
        },
          graphic:[
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
                text: ["{value|" + gailanTotal + "}"],
                textAlign: "center",
                rich: {
                  value: {
                    color: "#303133",
                    fontSize: '3rem',
                    lineHeight: 30,
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
          ],
          series: [
            {
              type: "pie",
              radius: ["45%", "70%"],
              center: ["center", "center"],
              label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'PingFang Bold',
                fontSize: '1.5rem',
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
                    "",
                    "#CAD9F0",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
              labelLine: {
                show: true,
                lineStyle:{
                  width:3
                }
              },
              data: this.list[this.tabIndex].sourceType
            },
            {},
          ],
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      },

    bolang(charts, xdata, ydata,color,rotate){
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
            right: '10%',
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
                fontSize:"1.5rem"
              },
              boundaryGap: false,
              data:this.list[this.tabIndex].dateList.map(item => {
                return item.name
              }),
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
                fontSize:"1.5rem"
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
              data:this.list[this.tabIndex].dateList.map(item => {
                return item.value
              }),
            }
          ]
        };
        option && charts.setOption(option);
        window.addEventListener("resize", function () {
          charts.resize();
        });
      }
  }
}
</script>

<style scoped lang="scss">
.myborder{
  height: 40rem;
  border-radius:4px;
  .title p{
    display:flex;
    align-items: center;
  }
  .titList{
    display:flex;
    align-items: center;
    margin-top:-1.2rem;
    font-style:normal;
    ul{
      li{
        flex:1;
        justify-content: space-between;
        list-style: none;
        float:left;
        padding-left:2.58rem;
        line-height:3rem;
        opacity: 0.5;

        height: 1.92rem;
        font-size: 2rem;
        font-family: PingFang Bold;
        font-weight: bold;

        color: #FFFFFF;
        background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
        -webkit-background-clip: text;
      }
      li:hover{
        color: #FFFFFF;
        background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
        -webkit-background-clip: text;
        text-shadow:0rem 0rem .5rem #00f0ff;
        opacity: 1;
      }
      .current1{
        color: #FFFFFF;
        background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
        -webkit-background-clip: text;
        text-shadow:0rem 0rem .5rem #00f0ff;
        opacity: 1;
      }
    }
  }
  .con{
    height:34.5rem;
    .first{
      float:left;
      padding-top:1.37rem;
      margin-right:4.75rem;
      margin-left:3.75rem;
      ul{
        li{
          text-align:center;
          list-style: none;
          font-size: 2rem;
          font-weight: 400;
          color: #FFFFFF;
          font-family: digifaw;
          p:nth-child(1){
            padding-bottom:0.42rem;
            font-size:2rem;
          }
          p:nth-child(2){
            //opacity: 0.5;
            text-shadow: 0rem 0rem 1rem #00F0FF;
            color: #FFFFFF;
            padding-bottom:1rem;
            font-weight: bold;
            font-size:2.5rem;
          }
        }
      }
    }
    .meitiBox,.fmyqzsBox{
      float: left;
      width:45rem;
      height:32.5rem;
      text-align:center;
      margin-top:1.37rem;
      span{
        font-size: 2rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        //opacity: 0.7;
        background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .meitiBox{
      #meiti {
        //margin-left:13.5rem;
        width: 45rem;
        height: 30.5rem;
      }
    }
    .fmyqzsBox{
      margin-left:3rem;
      #qushi{
        float:right;
        width: 45rem;
        height:29.5rem;

      }
    }
  }
}
</style>
