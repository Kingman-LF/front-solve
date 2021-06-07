<template>
    <div class="box">
        <div class="sclit">
          <div class="sel" @click="showOptions">
            {{selData.name}}<img :src="require('@/assets/images/shouye/down.png')" alt="" :style="show?'transform: rotate(180deg);':''">

          </div>
          <div class="options" :class="{show:show}">
            <div class="option" v-for="item in options" :key="item.value" @click="select(item)">{{item.name}}</div>
          </div>
        </div>
        <div class="bos">
            <div class="assignment" v-for="(item,index) in list" :key="index">
                <div class="trapezoid">{{item.department}}</div>
                <div class="rectangle">
                    <div class="classify">
                        <div class="rw">任务：{{item.name}}</div>
                        <div class="fzr">负责人：{{item.principal}}</div>
                        <div class="jbsj">交办时间：{{item.date}}</div>
                    </div>
                    <div class="w_schedule"><div class="n_schedule" :style="'width: '+item.percentage+'%'"><div class="bfb" >{{item.percentage}}%</div></div></div>

                </div>
            </div>
        </div>
        <div class="key">
          <img class="up" :src="require('@/assets/images/shouye/up.png')" alt="" @click="prev">
          <img class="down" :src="require('@/assets/images/shouye/up.png')" alt="" @click="next">
        </div>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          show:false,
          selData:{
            name:"全部",
            value:0
          },
          options:[
            {name:'全部',value:0},
            {name:'投诉多',value:1},
            {name:'纠纷多',value:2},
            {name:'风险多',value:3},
            {name:'舆论多',value:4},
            {name:'事故多',value:5},
          ],
          page:1,
          total:0,
          task:[
            {name:'监管领域舆情',department:"办公室",principal:'杨小红',date:'2021-5-17 10:00:00',percentage:60,type:1},
            {name:'行政发案率高、行政纠错率高问题',department:"法规处",principal:'匡一锋',date:'2021-5-17 10:00:00',percentage:60,type:1},
            {name:'重点领域虚假违法',department:"商标广告处",principal:'史琰',date:'2021-5-17 10:00:00',percentage:60,type:2},
            {name:'用品产品质量问题',department:"产品监管处",principal:'钟荣根',date:'2021-5-17 10:00:00',percentage:60,type:3},
            {name:'保健食品投诉举报',department:"食品生产处",principal:'邢峰',date:'2021-5-17 10:00:00',percentage:60,type:3},
            {name:'食品安全风险隐患',department:"食品抽检处",principal:'鲍金荣',date:'2021-5-17 10:00:00',percentage:60,type:3},
            {name:'网络销售药品',department:"药品流通处",principal:'邢晓峰',date:'2021-5-17 10:00:00',percentage:60,type:3},
            {name:'电梯故障增多',department:"特种设备处",principal:'许则春',date:'2021-5-17 10:00:00',percentage:60,type:3},
            {name:'投诉举报处理程序',department:"消保分局",principal:'陈晓冰',date:'2021-5-17 10:00:00',percentage:60,type:4},
            {name:'监管领域违法',department:"综合执法队",principal:'章健',date:'2021-5-17 10:00:00',percentage:60,type:5},

          ]
        }
      },
      computed:{
        list:function (){
          var l= this.task.filter(item => {
            if(this.selData.value){
              if(item.type === this.selData.value)
                return item
            }else{
              return item
            }
          })
          this.total = l.length
          return l.splice((this.page-1)*4,4);
        }
      },
      methods:{
        showOptions(){
          this.show = !this.show
        },
        select(e){
          this.selData = e;
          this.show = false;
          this.page = 1
        },
        prev(){
          if(this.page > 1){
            --this.page
          }
        },
        next(){
          if(this.page*4<this.total){
            ++this.page;
          }
        }
      }
    }
</script>
<style lang="scss" scoped>
    .box{
        width: 85rem;
        height: 80rem;
        float: right;
        position: relative;
        .sclit{
            width: 23.67rem;
            height: 5.67rem;
            position: absolute;
            top: 1.5rem;
            left: 3.5rem;
            font-size: 2.76rem;
            font-family: PingFang SC;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            text-align: center;
            line-height: 5.37rem;
            border: .15rem solid #03B1CC;
            box-shadow: inset 1rem 1rem 2.5rem rgba(129, 250, 250, 0.2);
            img{
                width: 2.75rem;
                height: 1.58rem;
                margin-left: 5rem;
                transition: all .2s;
            }
          .sel{
            cursor: pointer;
          }
          .options{
            position: absolute;
            left: -.15rem;
            top: 6rem;
            width: 23.67rem;
            //height: 28.35rem;
            height: 0;
            background: #061a5a;
            z-index: 99;
            border-width: 0;
            border-style: solid;
            border-color: #00F0FF;
            overflow: hidden;
            transition: height .2s;
            &.show{
              border-width: .15rem;
              height: 28.35rem;
            }
            .option{
              position: relative;
              width: 23.67rem;
              height: 5.67rem;
              cursor: pointer;
              font-weight: 400;
              &:after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                height: .15rem;
                width: 20rem;
                background-image: linear-gradient(to right, transparent , #00f0ff , transparent);
              }
              &:last-of-type:after{
                display: none;
              }
              &:hover{
                color: #00F0FF;
              }
            }
          }
        }
        .bos{
            width: 77.67rem;
            height: 70rem;
            overflow: hidden;
            margin: 0 auto;
            .assignment{
                width: 77.67rem;
                height: 16rem;
                margin-top: 1.42rem;
                .trapezoid{
                    width: 29.33rem;
                    height: 5.92rem;
                    text-align: center;
                    line-height: 5.52rem;
                    font-size: 3rem;
                    font-family: PingFang SC;
                    font-weight: bold;
                    font-style: italic;
                    color: #FFFFFF;
                    float: right;
                    margin-right: 2rem;
                    position: relative;
                }
                .trapezoid::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0.2rem;
                    border-bottom: none;
                    border: 0.2rem solid #03B1CC;
                    transform:  perspective(2em) rotateX(15deg);
                    box-shadow: inset 2rem 2rem 2.5rem rgba(120, 241, 241, 0.2);

                }
                .rectangle{
                    width: 77.67rem;
                    height: 9.5rem;
                    float: left;
                    border: .25rem solid #03B1CC;
                    .classify{
                        width: 77.67rem;
                        height: 4.5rem;
                        div{
                            height: 4.5rem;
                            line-height: 4.5rem;
                            float: left;
                            font-size: 2rem;
                            font-family: PingFang SC;
                            font-weight: bold;
                            font-style: italic;
                            color: #FFFFFF;
                            overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                -o-text-overflow:ellipsis;
                        }
                        .rw{
                            width: 20rem;
                            margin-left: 1.67rem;

                        }
                        .fzr{
                            width: 15rem;
                            margin-left: 5.58rem;
                        }
                        .jbsj{
                            width: 30rem;
                            float: right;
                            margin-right: 1.67rem;
                        }
                    }
                    .w_schedule{
                        width: 41.67rem;
                        height: 2rem;
                        margin: 1.2rem auto;
                        background: rgba($color: #fff, $alpha: .3);
                        border-radius: 1rem;
                        position: relative;
                        .n_schedule{
                            width: 0;
                            transition: width .5s;
                            height: 2rem;
                            background: rgba(27,153,237,1);
                            border-radius: 1rem;
                            .bfb{
                                position: absolute;
                                top: 0;
                                left: 20.84rem;
                                font-size: 1.5rem;
                                font-family: PingFang SC;
                                font-weight: bold;
                                font-style: italic;
                                color: #FFFFFF;

                            }
                        }
                    }
                }
            }
        }
        .key{
            width: 12.2rem;
            height: 3.42rem;
            margin: 1rem auto;
            img{
              width: 5.08rem;
              height:3.42rem;
              margin-left: 1rem;
              cursor: pointer;
            }
            .down{
              transform:rotateX(180deg);
            }
        }
    }
</style>
