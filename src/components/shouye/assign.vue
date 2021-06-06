<template>
    <div>
      <div class="mark" v-if="wentiListShow" @click="hide"></div>
      <div class="wentiList" :class="{wentiListShow:wentiListShow}">
        <div class="wentiConut"><span>{{wentiList.length}}</span><span>个</span></div>
        <div class="list">
          <div class="jiantou prev" @click="prev">
            <img :src="require('@/assets/images/jt.png')" alt="">
          </div>
          <div class="listBox">
            <div class="item one" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4]">
              <div class="tips">
                <div class="bg" :style="'background: '+wentiList[(page-1)*4].color"></div>
                <p>{{wentiList[(page-1)*4].tips}}</p>
              </div>
              <div class="wentiInfo">
                <div class="name">{{wentiList[(page-1)*4].name}}</div>
                <div class="calss">类型：{{wentiList[(page-1)*4].class}}</div>
                <div class="type">内容：{{wentiList[(page-1)*4].type}}</div>
                <div class="num">次数：{{wentiList[(page-1)*4].num}}</div>
              </div>
            </div>
            <div class="item two" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+1]">
              <div class="tips">
                <div class="bg" :style="'background: '+wentiList[(page-1)*4+1].color"></div>
                <p>{{wentiList[(page-1)*4+1].tips}}</p>
              </div>
              <div class="wentiInfo">
                <div class="name">{{wentiList[(page-1)*4+1].name}}</div>
                <div class="calss">类型：{{wentiList[(page-1)*4+1].class}}</div>
                <div class="type">内容：{{wentiList[(page-1)*4+1].type}}</div>
                <div class="num">次数：{{wentiList[(page-1)*4+1].num}}</div>
              </div>
            </div>
            <div class="item three" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+2]">
              <div class="tips">
                <div class="bg" :style="'background: '+wentiList[(page-1)*4+2].color"></div>
                <p>{{wentiList[(page-1)*4+2].tips}}</p>
              </div>
              <div class="wentiInfo">
                <div class="name">{{wentiList[(page-1)*4+2].name}}</div>
                <div class="calss">类型：{{wentiList[(page-1)*4+2].class}}</div>
                <div class="type">内容：{{wentiList[(page-1)*4+2].type}}</div>
                <div class="num">次数：{{wentiList[(page-1)*4+2].num}}</div>
              </div>
            </div>
            <div class="item four" :class="{hide:showItem}"  v-if="wentiList[(page-1)*4+3]">
              <div class="tips">
                <div class="bg" :style="'background: '+wentiList[(page-1)*4+3].color"></div>
                <p>{{wentiList[(page-1)*4+3].tips}}</p>
              </div>
              <div class="wentiInfo">
                <div class="name">{{wentiList[(page-1)*4+3].name}}</div>
                <div class="calss">类型：{{wentiList[(page-1)*4+3].class}}</div>
                <div class="type">内容：{{wentiList[(page-1)*4+3].type}}</div>
                <div class="num">次数：{{wentiList[(page-1)*4+3].num}}</div>
              </div>
            </div>
          </div>
          <div class="jiantou next" @click="next">
            <img :src="require('@/assets/images/jt.png')" alt="">
          </div>
        </div>
      </div>
      <div class="box">
        <div class="sm-circle sm_1">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test" @click="showT">
            <div class="innerTitle num">投诉多</div>
            <div class="innerTitle number">{{list1.length}}</div>
          </div>
        </div>
        <div class="sm-circle sm_2">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test">
            <div class="innerTitle num">纠纷多</div>
            <div class="innerTitle number">6</div>
          </div>
        </div>
        <div class="sm-circle sm_3">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test">
            <div class="innerTitle num">风险多</div>
            <div class="innerTitle number">6</div>
          </div>
        </div>
        <div class="sm-circle sm_4">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test">
            <div class="innerTitle num">舆情多</div>
            <div class="innerTitle number">6</div>
          </div>
        </div>
        <div class="sm-circle sm_5">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="test">
            <div class="innerTitle num">故事多</div>
            <div class="innerTitle number">6</div>
          </div>
        </div>
        <div class="big-circle sm_6">
          <img class="img_ty1" :src="require('@/assets/images/shouye/ty1.png')" alt="">
          <img class="img_ty2" :src="require('@/assets/images/shouye/ty4.png')" alt="">
          <img class="img_ty3" :src="require('@/assets/images/shouye/ty3.png')" alt="">
          <div class="innerTitle test">
            一键交办
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  data(){
    return {
      loading: false,
      wentiListShow:false,
      showItem:true,
      page:1,
      operating:'next',
      wentiList:[],
      //投诉
      list1:[
        {id:1,name:'商品投诉',tips:'投诉',class:'其他商品',type:'质量',num:527,color:'#4103FB'},
        {id:2,name:'商品投诉',tips:'投诉',class:'一般食品',type:'质量',num:526,color:'#4103FB'},
        {id:6,name:'服务投诉',tips:'投诉',class:'餐饮和住宿服务',type:'其他',num:487,color:'#4103FB'},
        {id:7,name:'服务投诉',tips:'投诉',class:'餐饮和住宿服务',type:'质量',num:384,color:'#4103FB'},
        {id:3,name:'商品投诉',tips:'投诉',class:'服装、鞋帽',type:'质量',num:313,color:'#4103FB'},
        {id:4,name:'商品投诉',tips:'投诉',class:'家居用品',type:'质量',num:312,color:'#4103FB'},
        {id:8,name:'服务投诉',tips:'投诉',class:'其他服务',type:'其他',num:245,color:'#4103FB'},
        {id:5,name:'商品投诉',tips:'投诉',class:'一般食品',type:'其他',num:227,color:'#4103FB'},
        {id:7,name:'服务投诉',tips:'投诉',class:'停车服务',type:'价格投诉 ',num:142,color:'#4103FB'},
        {id:10,name:'服务投诉',tips:'投诉',class:'一般食品',type:'其他',num:131,color:'#4103FB'},
      ],
      //纠纷
      list2:[

      ],
      showItemTime:null
    }
  },
  mounted() {
  },
  methods:{
    showT(){
      if(this.loading) return
      this.loading = true
      this.wentiList = this.list1
      this.wentiListShow = true;
      this.showItem = false

      this.page = 1;
      this.showItemTime = setTimeout(()=>{

        this.loading = false
      },500)
    },
    hide(){
      this.wentiListShow = false;
      this.page = 0;
      this.showItem = true
      clearTimeout(this.showItemTime)
      this.wentiList = []
    },
    prev(){
      if(this.loading) return
      if(this.page === 1) return
      clearTimeout(this.showItemTime)
      this.showItem = true;
      this.showItemTime = setTimeout(()=>{
        this.page--;
        this.loading = false
        this.showItem = false
      },500)
    },
    next(){
      if(this.loading) return
      if(Math.ceil(this.wentiList.length/4) < (this.page+1)) return
      clearTimeout(this.showItemTime)
      this.showItem = true;
      this.showItemTime = setTimeout(()=>{
        this.page++;
        this.loading = false
        this.showItem = false
      },500)
    }
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
      width: 7.33rem;
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
        font-family: PingFang SC;
        font-weight: 400;
        .wentiInfo{
          color: #FFFFFF;
          font-size: 2.5rem;
          line-height: 2.5rem;
          display: flex;
          flex-wrap: wrap;
          .name{
            //font-style: italic;
            //font-style: oblique;
            transform: skew(
                    -12deg
            );
            width: 100%;
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
        &.hide{
          opacity: 0;
          left: -10rem !important;
          top: 30rem !important;
        }
        &.one{
          left: 0;
          top: 0;
        }
        &.two{
          left: 18.4rem;
          top: 21.4rem;
        }
        &.three{
          left: 18.4rem;
          top: 42.65rem;
        }
        &.four{
          left: 0;
          top: 64rem;
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
</style>
