<template>
    <div>
      <div class="mark" v-show="wentiListShow" @click="hide"></div>
      <div class="mark" v-show="jiaobanShow"></div>
      <div class="wentiList" :class="{wentiListShow:wentiListShow}">
        <div class="wentiConut"><span>{{wentiList.length}}</span><span>个</span></div>
        <div class="list">
          <div class="jiantou prev" @click="prev">
            <img :src="require('@/assets/images/jt.png')" alt="">
          </div>
<!--          投诉列表-->
          <div class="listBox" v-if="type === 1">
            <div class="item"
              :class="{
                show:index === ((page-1)*4+index%4),
                item0:index%4 === 0,
                item1:index%4 === 1,
                item2:index%4 === 2,
                item3:index%4 === 3
              }"
              v-for="(item,index) in wentiList"
              :key="index"
              @click="getDetail(item)">
              <div class="tips">
                <div class="bg" :style="'background: #4103FB'"></div>
                <p>{{item.tsType}}</p>
              </div>
              <div class="wentiInfo">
                <div class="name">{{item.tsDefendantName}}</div>
                <div class="calss">{{item.tsConMedType}}</div>
                <div class="type">{{item.tsNatureType}}</div>
                <div class="num">{{item.tsProcessingDept}}</div>
              </div>
            </div>


<!--            <div class="item one" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4]">-->
<!--              <div class="tips">-->
<!--                <div class="bg" :style="'background: '+wentiList[(page-1)*4].color"></div>-->
<!--                <p>{{wentiList[(page-1)*4].tips}}</p>-->
<!--              </div>-->
<!--              <div class="wentiInfo">-->
<!--                <div class="name">{{wentiList[(page-1)*4].name}}</div>-->
<!--                <div class="calss">{{wentiList[(page-1)*4].class}}</div>-->
<!--                <div class="type">{{wentiList[(page-1)*4].type}}</div>-->
<!--                <div class="num">{{wentiList[(page-1)*4].bumen}}</div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="item two" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+1]">-->
<!--              <div class="tips">-->
<!--                <div class="bg" :style="'background: '+wentiList[(page-1)*4+1].color"></div>-->
<!--                <p>{{wentiList[(page-1)*4+1].tips}}</p>-->
<!--              </div>-->
<!--              <div class="wentiInfo">-->
<!--                <div class="name">{{wentiList[(page-1)*4+1].name}}</div>-->
<!--                <div class="calss">{{wentiList[(page-1)*4+1].class}}</div>-->
<!--                <div class="type">{{wentiList[(page-1)*4+1].type}}</div>-->
<!--                <div class="num">{{wentiList[(page-1)*4+1].bumen}}</div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="item three" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+2]">-->
<!--              <div class="tips">-->
<!--                <div class="bg" :style="'background: '+wentiList[(page-1)*4+2].color"></div>-->
<!--                <p>{{wentiList[(page-1)*4+2].tips}}</p>-->
<!--              </div>-->
<!--              <div class="wentiInfo">-->
<!--                <div class="name">{{wentiList[(page-1)*4+2].name}}</div>-->
<!--                <div class="calss">{{wentiList[(page-1)*4+2].class}}</div>-->
<!--                <div class="type">{{wentiList[(page-1)*4+2].type}}</div>-->
<!--                <div class="num">{{wentiList[(page-1)*4+2].bumen}}</div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="item four" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+3]">-->
<!--              <div class="tips">-->
<!--                <div class="bg" :style="'background: '+wentiList[(page-1)*4+3].color"></div>-->
<!--                <p>{{wentiList[(page-1)*4+3].tips}}</p>-->
<!--              </div>-->
<!--              <div class="wentiInfo">-->
<!--                <div class="name">{{wentiList[(page-1)*4+3].name}}</div>-->
<!--                <div class="calss">{{wentiList[(page-1)*4+3].class}}</div>-->
<!--                <div class="type">{{wentiList[(page-1)*4+3].type}}</div>-->
<!--                <div class="num">{{wentiList[(page-1)*4+3].bumen}}</div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div class="jiantou next" @click="next">
            <img :src="require('@/assets/images/jt.png')" alt="">
          </div>
        </div>
      </div>
      <div class="jiaobanBOx" v-if="jiaobanShow">
        <div class="jbSuccess" v-if="jbSuccess" @click="jbSuccess = false;jiaobanShow = false;this.jiaobanList = []">
          <img :src="require('@/assets/images/jiaoFuSuccess.png')" alt="">
          <p>任务交办成功</p>
        </div>
        <div class="jiaobanTitle">重要任务交办</div>
        <div class="jiaobanList">
          <div class="jiaobanItem" v-for="item in jiaobanList">
            <div class="wenti">
              <div class="wentiBox">
                <div class="wentiType">{{item.wentiType}}</div>
                <div class="wentiName">{{item.task}}</div>
              </div>
            </div>
            <div class="jiantou"><img :src="require('@/assets/images/indexJT.png')" alt=""></div>
            <div class="bumen">
              <div class="bumenBox">
                <div class="bumenName">{{item.departmentName}}</div>
                <div class="bumenFZR">负责人：{{item.person}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      详情弹窗-->
      <el-dialog title="详情信息" :visible.sync="showDetail">
        <tsjb :id="id"></tsjb>
      </el-dialog>

      <div class="box">
        <div class="sm-circle sm_1">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showWentiList(1)">
            <div class="innerTitle num">投诉多</div>
            <div class="innerTitle number">{{list1.length}}</div>
          </div>
        </div>
        <div class="sm-circle sm_2">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showWentiList(2)">
            <div class="innerTitle num">纠纷多</div>
            <div class="innerTitle number">{{list2.length}}</div>
          </div>
        </div>
        <div class="sm-circle sm_3">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showWentiList(3)">
            <div class="innerTitle num">风险多</div>
            <div class="innerTitle number">{{list3.length}}</div>
          </div>
        </div>
        <div class="sm-circle sm_4">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showWentiList(4)">
            <div class="innerTitle num">舆情多</div>
            <div class="innerTitle number">{{list4.length}}</div>
          </div>
        </div>
        <div class="sm-circle sm_5">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showWentiList(5)">
            <div class="innerTitle num">事故多</div>
            <div class="innerTitle number">{{list5.length}}</div>
          </div>
        </div>
        <div class="big-circle sm_6">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="innerTitle test" @click="jiaoban">
            一键交办
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import {assignment,status,PageList} from "@/assets/api/index"

import tsjb from "@/components/details/tsjb"
export default {
  data(){
    return {
      type:0,

      loading: false,
      wentiListShow:false,
      jiaobanShow:false,
      showItem:true,
      jbSuccess:false,
      page:1,
      operating:'next',
      wentiList:[],
      jiaobanList:[],
      showItemTime:null,


      list1:[],
      list2:[],
      list3:[],
      list4:[],
      list5:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],

      showDetail:false,
      id:""
    }
  },
  mounted() {
    this.status();
    this.PageList()
  },
  methods:{
    status(){
      status().then(res => {
        this.list1 = res.data
      })
    },
    PageList(){
      PageList().then(res => {
        this.list2 = res.data
      })
    },
    showWentiList(e){
      var list;
      if(e === 1) list = this.list1;
      if(e === 2) list = this.list2;
      if(e === 3) list = this.list3;
      if(e === 4) list = this.list4;
      if(e === 5) list = this.list5;
      if(list.length){
        if(this.loading) return
        this.loading = true
        this.wentiList = list;
        this.type = e
        this.wentiListShow = true;
        this.showItem = false
        this.page = 1;
        this.showItemTime = setTimeout(()=>{
          this.loading = false
        },500)
      }

    },
    hide(){
      this.wentiListShow = false;
      this.page = 0;
      this.showItem = true
      clearTimeout(this.showItemTime)
      this.wentiList = []
    },
    prev(){
      if(this.page === 1) return
      this.page--;
    },
    next(){
      if(Math.ceil(this.wentiList.length/4) < (this.page+1)) return
      this.page++;
    },
    jiaoban(){
      assignment().then(res => {
        if(res.data.length === 0) return;
        this.jiaobanShow = true
        this.interval = setInterval(()=>{
          var obj =res.data.splice(0,1)[0];
          obj.wentiType = []
          obj.model.indexOf("1") !== -1 && obj.wentiType.push("投诉多")
          obj.model.indexOf("2") !== -1 && obj.wentiType.push("纠纷多")
          obj.model.indexOf("3") !== -1 && obj.wentiType.push("风险多")
          obj.model.indexOf("4") !== -1 && obj.wentiType.push("舆情多")
          obj.model.indexOf("5") !== -1 && obj.wentiType.push("事故多")
          obj.wentiType = obj.wentiType.join(",")
          this.jiaobanList.push(obj)
          if(res.data.length === 0){
            this.$parent.noAssignment();
            clearInterval(this.interval);
            this.jbSuccess = true;
          }
        },500)
      })
    },
    //点击列表弹窗显示详情
    getDetail(e){
      this.showDetail = true;
      if(this.type === 1){
        this.id = e.tsRegister
      }

    }
  },
  components:{
    tsjb
  }
}
</script>
<style lang="scss" scoped>
.mark{
  width: 320rem;
  height: 90rem;
  left: 0;
  bottom: 0;
  position: absolute;
  background: transparent;
  z-index: 998;
}
.wentiList{
  width: 114rem;
  height: 114rem;
  position: absolute;
  top: -12.16rem;
  left: -114rem;
  background-color: rgba(6,26,91,.9);
  box-shadow: 0 0 6.66rem rgba(0,120,243,.63) inset,
              0 1rem 6.66rem rgba(0,150,255,1);
  border-radius: 50%;
  z-index: 999;
  border: 0.3rem solid #00F0FF;
  box-sizing: border-box;
  transition: all 1s;
  &.wentiListShow{
    left: -26.16rem;
  }
  .wentiConut{
    position: absolute;
    left: 35%;
    top: 50%;
    transform: translate(0,-50%);
    color: #FFFFFF;
    font-size: 7rem;
    font-family: PingFang SC;
    span:first-of-type{
      height: 5.33rem;
      line-height: 5.33rem;
      margin-right: 1.75rem;
      font-weight: bold;
      //font-style: italic;
      display: inline-block;
      transform: skew(
              -12deg
      );
    }
    span:last-of-type{
      width: 2.33rem;
      height: 2.33rem;
      font-size: 2.5rem;
    }
  }

  .list{
    position: absolute;
    top: 18.41rem;
    bottom: 18.41rem;
    left: 36.16rem;
    right: 6.42rem;
    margin: auto;
    .jiantou{
      position: absolute;
      width: 4rem;
      height: 2.33rem;
      left: 20.42rem;
      z-index: 99;
      cursor: pointer;
      img{
        width: 100%;
      }
      &.prev{
        top: -3rem;
        transform: rotate(180deg);
      }
      &.next{
        bottom: -3rem;
      }
    }
    .listBox{
      width: 100%;
      height:100%;
      position: relative;
      .item{
        cursor: pointer;
        width: 52.33rem;
        height: 12.5rem;
        background: url("~@/assets/images/indexitembg.png") no-repeat center;
        background-size: 100%;
        position: absolute;
        transition: all .5s;
        font-family: "PingFang SC";
        font-weight: 400;
        opacity: 0;
        left: -10rem;
        top: 30rem;
        &.item0.show{
          opacity: 1;
          left: 0;
          top: 0;
        }
        &.item1.show{
          opacity: 1;
          left: 18.4rem;
          top: 21.4rem;
        }
        &.item2.show{
          opacity: 1;
          left: 18.4rem;
          top: 42.65rem;
        }
        &.item3.show{
          opacity: 1;
          left: 0;
          top: 64rem;
        }
        .wentiInfo{
          color: #FFFFFF;
          font-size: 2.5rem;
          line-height: 2.5rem;
          display: flex;
          flex-wrap: wrap;
          .name{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            transform: skew(
                    -12deg
            );
            width: 30rem;
            margin: 2.5rem 0 0 2rem;
          }
          .calss{
            width: 19rem;
            margin: 1.83rem 0 0 2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .type{
            width: 14rem;
            margin: 1.83rem 0 0 1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .num{
            width: 14rem;
            margin: 1.83rem 0 0 1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .tips{
          position: absolute;
          top: 1.1rem;
          right: 5.3rem;
          width: 15rem;
          height: 3.8rem;
          font-size: 2.5rem;
          color: #FFFFFF;
          text-align: center;
          line-height:3rem;
          .bg{
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            width: 15rem;
            height: 3rem;
            transform: skew(36deg);
          }
        }



      }
    }

  }
}
@keyframes a {
  50%{left:20rem}
}
    .box{
        width: 85rem;
        height: 80rem;
        position: relative;
        .sm-circle{
            width: 24.67rem;
            height: 24.67rem;
            position: relative;

            .img_ty1{
                width: 21rem;
                height: 21rem;
                animation: transz 15s linear infinite;
                position: absolute;
                top: 1.83rem;
                left: 1.83rem;
            }
            .img_ty2{
                width: 19rem;
                height: 19rem;
                animation: transf 15s linear infinite;
                position: absolute;
                top: 2.84rem;
                left: 2.84rem;
            }
            .img_ty3{
                width: 18.5rem;
                height: 18.5rem;
                position: absolute;
                top: 3.1rem;
                left: 3.1rem;
            }
            .test{
                width: 18rem;
                height: 18rem;
                padding-top: 4rem;
                position: absolute;
                top: 3.1rem;
                left: 3.1rem;
                cursor: pointer;
                .num{
                    text-align: center;
                    font-size: 3rem;
                    font-family: PingFang SC;
                    font-weight: bold;
                    font-style: italic;
                    color: #FFFFFF;
                }
                .number{
                    text-align: center;
                    font-size: 4rem;
                    font-family: PingFang SC;
                    font-weight: bold;
                    font-style: normal;
                    color: #FFFFFF;
                }
            }
        }

        .big-circle{
            width: 29rem;
            height: 29rem;
            position: relative;
            .img_ty1{
                width: 26rem;
                height: 26rem;
                animation: transz 15s linear infinite;
                position: absolute;
                top: 1.83rem;
                left: 1.83rem;
            }
            .img_ty2{
                width: 24rem;
                height: 24rem;
                animation: transf 15s linear infinite;
                position: absolute;
                top: 2.84rem;
                left: 2.84rem;
            }
            .img_ty3{
                width: 23.5rem;
                height: 23.5rem;
                position: absolute;
                top: 3.1rem;
                left: 3.1rem;
            }
            .test{
                width: 23rem;
                height: 23rem;
                text-align: center;
                line-height: 23rem;
                position: absolute;
                top: 3.1rem;
                left: 3.1rem;
                font-size: 4rem;
                font-family: PingFang SC;
                font-weight: bold;
                font-style: italic;
                color: #FFFFFF;
                background: linear-gradient(180deg, rgba(255, 255, 255, 1) 40%, rgba(15, 94, 214, 0.4) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              cursor: pointer;
            }
        }
        .sm_1{
            position: absolute;
            top: 0.5rem;
            left: 30.83rem;
        }
        .sm_2{
            position: absolute;
            top: 20.58rem;
            left: 58.58rem;
        }
        .sm_3{
            position: absolute;
            top: 55.92rem;
            left: 52.67rem;
        }

        .sm_4{
            position: absolute;
            top: 55.92rem;
            left: 10.08rem;
        }
        .sm_5{
            position: absolute;
            top: 22.5rem;
            left: 4.92rem;
        }
        .sm_6{
            position: absolute;
            top: 30.25rem;
            left: 29.75rem;
        }
    }
    @keyframes transz {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    @keyframes transf {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(-360deg)}
    }
    .jiaobanBOx{
      width: 160rem;
      height: 81.08rem;
      background: rgba(19, 31, 63, .9);
      border: 0.17rem solid #00F0FF;
      box-shadow: 0rem 0rem 2rem 0rem #00F0FF inset;
      position: absolute;
      left: 0;
      right: 0;
      top: 8.33rem;
      bottom: 0;
      margin: auto;
      z-index: 999;
      .jbSuccess{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 38rem;
        height: 38rem;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin:auto;
        z-index: 66;
        border: 1rem solid #00F0FF;
        box-shadow: 0rem 0rem 2rem 0rem #00F0FF inset;
        background-color: #061a5b;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        img{
          width: 50%;
        }
        p{
          font-size: 3rem;
          color: #fff;
          font-family: "PingFang SC";
          font-weight: bold;
          margin: 1rem 0;
        }
        &:hover{
          background-color: #0a57ff;
        }
      }
      .jiaobanTitle{
        font-size: 4rem;
        font-family: PingFang SC;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
        background-image: -webkit-linear-gradient(bottom, #3b5ee2, white, white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 4rem;
        margin: 2.5rem 0 3.75rem;
        text-align: center;
      }
      .jiaobanList{
        height: 66.66rem;
        margin:0 5rem 0;
        overflow: auto;
        .jiaobanItem{
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          &:last-of-type{
            margin-bottom: 0;
          }
          .wenti,.bumen{
            width: 60rem;
            .wentiBox,.bumenBox{
              background: rgba(19, 31, 63, .9);
              border: 0.17rem solid #00F0FF;
              box-shadow: 0rem 0rem 2rem 0rem #00F0FF inset;
              color: #ffffff;
              font-family: PingFang SC;
              padding: 1rem;
              .wentiType,.bumenName{
                font-size: 3rem;
                font-weight: bold;
                font-style: italic;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .wentiName,.bumenFZR{
                width: 21rem;
                font-size: 2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .wentiName{
                width: 100%;
              }
            }
          }
          .jiantou{
            width: 7.75rem;
            height: 3.92rem;
            margin: 0 10rem;
            position: relative;
            img{
              width: 100%;
            }
          }
        }


      }
    }
</style>
