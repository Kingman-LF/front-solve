<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>信访总量</p>
    </div>
    <div class="cons">
      <!-- <div class="total">
        <span>总量</span>
        <span>37</span>
      </div>
      <div class="area">
        <div class="item">
          <p>6</p>
          <p>特检院</p>
        </div>
        <div class="item">
          <p>6</p>
          <p>办公室</p>
        </div>
        <div class="item">
          <p>3</p>
          <p>机关党委</p>
        </div>
        <div class="item">
          <p>4</p>
          <p>执法队</p>
        </div>
      </div>
      <div class="area">
        <div class="item">
          <p>0</p>
          <p>吴兴区</p>
        </div>
        <div class="item">
          <p>4</p>
          <p>南浔区</p>
        </div>
        <div class="item">
          <p>2</p>
          <p>德清县</p>
        </div>
        <div class="item">
          <p>3</p>
          <p>长兴县</p>
        </div>
        <div class="item">
          <p>3</p>
          <p>安吉县</p>
        </div>
        <div class="item">
          <p>6</p>
          <p>南太湖新区</p>
        </div>
      </div> -->
      
      <div class="zl">
        <div class="num">总量</div>
        <div class="number">77452</div>
      </div>
      <div class="fb">
        <div class="lb">
          <div  
            v-for="(item, index) in topList"
            :key="item.id"
            :class="tabIndex === index ? 'clie' : ''"
            @click="clickF(item, index)">{{ item.text }}</div>
          <!-- <div>处室</div> -->
        </div>
        <div class="dw">
          <div 
            v-for="(item, index) in lvList[tabIndex]"
            :key="index"
            :style="tabIndex==0?'width:33.33%':'width:50%'"
          ><span>{{item.num}}</span><span class="numb">{{item.value}}</span></div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jagl",
  data() {
    return {
      tabIndex: 0,
      topList: [
        {
          id: Math.random(),
          text: "区县",
        },
        {
          id: Math.random(),
          text: "处室",
        },
      ],
      lvList:[
        [
          {id: Math.random() + new Date().valueOf() + "",num:'吴兴区',value:'2700'},
          {id: Math.random() + new Date().valueOf() + "",num:'南浔区',value:'5418'},
          {id: Math.random() + new Date().valueOf() + "",num:'德清县',value:'1452'},
          {id: Math.random() + new Date().valueOf() + "",num:'长兴县',value:'5554'},
          {id: Math.random() + new Date().valueOf() + "",num:'安吉县',value:'156'},
          {id: Math.random() + new Date().valueOf() + "",num:'南太湖新区',value:'1241'},
        ],
        [
          {id: Math.random() + new Date().valueOf() + "",num:'特检院',value:'6'},
          {id: Math.random() + new Date().valueOf() + "",num:'办公室',value:'6'},
          {id: Math.random() + new Date().valueOf() + "",num:'机关党委',value:'3'},
          {id: Math.random() + new Date().valueOf() + "",num:'执法大队',value:'4'},
          // {id: Math.random() + new Date().valueOf() + "",num:'安吉县',value:'156'},
          // {id: Math.random() + new Date().valueOf() + "",num:'南太湖新区',value:'1241'},
          // {id: Math.random() + new Date().valueOf() + "",num:'安吉县',value:'156'},
          // {id: Math.random() + new Date().valueOf() + "",num:'南太湖新区',value:'1241'},
        ]
      ]
    }
  },
  methods: {
    clickF(item, index) {
      this.tabIndex = index;
      // this.$data.lvList[0].number=this.$data.qxdata[index].number
      // console.log(this.$data.qxdata[index].number);
    },
  },
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 40rem;
  position: relative;
  .title{
    width: 16.08rem;
  }
  .cons{
    width: 100%;
    height: 33rem;
    .zl{
      width: 100%;
      height: 8rem;
      display: flex;
      font-family: PingFang Bold;
      justify-content: center;
      div{
        height: 8rem;
        line-height: 8rem;
        color: #fff;
      }
      .num{
        font-size: 2.5rem;
      }
      .number{
        font-weight: bold;
        font-family: 'digifaw';
        font-size: 4rem;
        text-shadow: 2px 2px 5px #0096ff;
      }
    }
    .fb{
      width: 100%;
      height: 25rem;
      .lb{
        height: 5rem;
        display: flex;
        justify-content: space-evenly;
        div{
          line-height: 5rem;
          font-family: PingFang Bold;
          color: rgba($color: #ccc, $alpha: 1);
          cursor: pointer;
          font-size: 2rem;
        }
        .clie{
          color: #fff;
          text-shadow: 2px 2px 5px #0096ff;
        }
      }
      .dw{
        width: 100%;
        height: 10rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        div{
          width: 33.33%;
          height: 10rem;
          color: #fff;
          line-height: 5rem;
          text-align: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          span{
            display: block;
            width: 100%;
            height: 5rem;
            font-size: 2rem;
            font-family: PingFang Bold;
          }
          .numb{
            font-weight: bold;
            font-family: 'digifaw';
            font-size: 2rem;
            text-shadow: 2px 2px 5px #0096ff;
          }
        }
      }
    }
  }
  // .c{
  //   width: 100%;
  //   height: 34.33rem;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   color: #FFFFFF;
  //   font-family: "PingFang SC";
  //   font-weight: 400;
  //   .total{
  //     width: 40rem;
  //     height: 4.5rem;
  //     line-height: 4.5rem;
  //     margin:3.08rem auto 5.67rem;
  //     text-align: center;
  //     span{
  //       font-size: 3rem;
  //       &:last-of-type{
  //         margin-left: 1.67rem;
  //         font-size: 6rem;
  //         font-family: digifaw;
  //         font-weight: 400;
  //         text-shadow: 0.2rem 0rem 0.5rem #0096ff, -0.2rem 0rem 0.5rem #0096ff, 0rem 0.2rem 0.5rem #0096ff, 0rem -0.2rem 0.5rem #0096ff;
  //       }
  //     }
  //   }
  //   .area{
  //     display: flex;
  //     font-size: 2rem;
  //     font-family: "PingFang SC";
  //     font-weight: 400;
  //     margin:0 6rem;
  //     height: 10rem;
  //     .item{
  //       flex: 1;
  //       text-align: center;
  //     }
  //     p{
  //       font-family: "PingFang SC";
  //       font-weight: 400;
  //       &:first-of-type{
  //         font-family: digifaw;
  //         font-weight: 400;
  //         text-shadow: 0.2rem 0rem 0.5rem #0096ff, -0.2rem 0rem 0.5rem #0096ff, 0rem 0.2rem 0.5rem #0096ff, 0rem -0.2rem 0.5rem #0096ff;
  //         font-size: 3rem;
  //       }
  //     }
  //   }
  // }
}
// .gailan {
//   margin-top: 1rem;
//   display: flex;
//   padding-left: 2.08rem;
//   position: relative;
//   justify-content: space-between;
//   div {
//     padding: 0rem 7.17rem 0rem 6rem;
//     box-sizing: border-box;
//     span {
//       display: block;
//       font-size: 2rem;
//       font-family: PingFang;
//       font-weight: bold;
//       color: #ffffff;
//       text-align: left;
//       margin-bottom: 3.25rem;
//       &:last-of-type{
//         margin-bottom: 0;
//       }
//     }
//   }
// }
</style>
