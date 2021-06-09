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
          be_complainedXData:['棋牌室', '永辉超市', '德清乡巴佬纸制品有限公司', '某店家', '奥园', '老太婆粥摊', '世纪华联生鲜超市（湖州康山街道荟海永鲜食品商行）', '安吉浙北购物有限责任公司', '中石化加油站', '废旧轮胎加工厂'],
          be_complainedYData:[2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
          complainantXData:['张学战', '周敏杰', '吴建松', '许红霞', '田先生', '褚锡炯', '胡女士', '徐达', '接先生', '王伟'],
          complainantYData:[9, 4, 4, 3, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          text: "吴兴区",
          be_complainedXData:['喜多多休闲食品', '湖州吴兴曙光威兹曼医疗美容门诊部有限公司', '吴兴区衣裳街的串意十足烧烤店', '湖州辣椒医疗美容诊所有限公司', '湖州恒颜美医疗美容门诊部有限公司', '湖州倍美医疗美容诊所有限公司', '浙江二虎贸易有限公司', '金迪木门', '上海发联购物中心', '吴兴兴博房产中介所'],
          be_complainedYData:[126, 101, 99, 57, 49, 38, 27, 24, 20, 18],
          complainantXData:['张学战', '许红霞', '吴建松', '周敏杰', '刘晓东', '杨先生', '陈杰', '孟四军', '李女士', '徐先生'],
          complainantYData:[9, 7, 5, 5, 5, 4, 4, 4, 4, 4],
        },
        {
          id: Math.random(),
          text: "南浔区",
          be_complainedXData:['棋牌室', '宾馆', '商户', '私营加油', '私人加油站', '晓优副食品店', '练市镇花林村佳良粮油股份有限公司', '标龙项目部工地', '兆弟技术有限公司', '水泥砖厂'],
          be_complainedYData:[4, 3, 1, 1, 1, 1, 1, 1, 1, 1],
          complainantXData:['杨先生', '沈先生', '沈先生', '某先生', '姚先生', '杨先生', '邱先生', '杨女士', '张学战', '吴际明'],
          complainantYData:[3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        {
          id: Math.random(),
          text: "德清县",
          be_complainedXData:['德清乡巴佬纸制品有限公司', '某店家', '废旧轮胎加工厂', '浙江雪海梅乡食品有限公司', '老太婆粥摊', '某棋牌室', '棋牌室', '上海如海超市', '花圈店', '新街酒家'],
          be_complainedYData:[7, 5, 4, 4, 4, 3, 3, 3, 3, 3],
          complainantXData:['张学战', '周敏杰', '王伟', '一先生', '一先生', '郭建峰', '先生', '钱先生', '钱先生', '马女士'],
          complainantYData:[7, 4, 3, 2, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          text: "长兴县",
          be_complainedXData:['融悦东方', '奥园', '金陵菜场售卖狗肉', '融悦锦园', '辣子狗肉馆', '李家巷大桥附近的综合物流园区百世汇通快递旁', '好朋友大酒店', '虹星桥镇签忆烧烤店', '恒大悦龙台小区17-2-1302室', '融悦锦苑'],
          be_complainedYData:[4, 4, 3, 3, 3, 3, 3, 3, 2, 2],
          complainantXData:['田先生', '接先生', '胡女士', '荆先生', '张学战', '陈先生', '吴女士', '刘先生', '乔先生', '胡女士'],
          complainantYData:[5, 3, 3, 2, 2, 2, 2, 2, 2, 2],
        },
        {
          id: Math.random(),
          text: "安吉县",
          be_complainedXData:['碧桂园凤凰府开发商', '友佳大药房', '香溪丽舍丽园开发商', '妙英超市', '安吉奇恒竹制品厂', '大康', '浙江精通科技股份有限公司', '恒隆府房地产开发商', '孝源菜场西门进去左手第一个肉摊', '孝源街道孝苑东区的5幢10号储藏室'],
          be_complainedYData:[3, 3, 2, 2, 2, 2, 2, 1, 1, 1],
          complainantXData:['秦先生', '黄女士', '先生', '朱女士', '女士', '施女士', '宋先生', '徐女士', '张女士', '彭女士'],
          complainantYData:[2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        },
        {
          id: Math.random(),
          text: "南太湖新区",
          be_complainedXData:['无'],
          be_complainedYData:[0],
          complainantXData:['无'],
          complainantYData:[0],
        },
      ]
    };
  },
  mounted() {
    let complained2 = document.getElementById("be_complained2");
    this.complainedChart2 = echarts.init(complained2);
    this.zhuzhuangtu3(this.complainedChart2);
    let complainant2 = document.getElementById("complainant2");
    this.complainantChart2 = echarts.init(complainant2);
    this.zhuzhuangtu3(this.complainantChart2);
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
      this.zhuzhuangtu3(this.complainedChart2);
      this.zhuzhuangtu3(this.complainantChart2);
    },
    zhuzhuangtu3(charts, color, xdata, ydata, rotate) {
        if(charts._dom.id==='be_complained2'){
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
            formatter(e){
              return `${e[0].name}：${e[0].value}次`
              // console.log(e);
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