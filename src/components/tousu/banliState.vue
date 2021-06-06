<template>
    <div class="box myborder">
      <div class="title">
        <img :src="require('@/assets/images/titlelogo.png')" alt="" />
        <p>办理状态</p>
      </div>
      <div class="filed dis">
        <div class="num">办结已归档</div>
        <div class="number">6809</div>
      </div>
      <div class="in_hand dis">
        <div class="num">处理中</div>
        <div class="number">6809</div>
      </div>
      <div class="coms dis">
        <div class="num">代办理</div>
        <div class="number">6809</div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
.box {
    width: 21.67rem;
    height: 40rem;
    .title{
      margin-bottom: 2rem;
    }
    .dis{
      width: 16.67rem;
      height: 9.5rem;
      .num{
        width: 16.67rem;
        height: 4.7rem;
        line-height: 4.7rem;
        text-align: center;
        font-size: 2rem;
        font-family: PingFang SC;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
      }
      .number{
        width: 16.67rem;
        height: 4.7rem;
        text-align: center;
        line-height: 4.7rem;
        font-size: 3.33rem;
        font-family: digifaw;
        text-shadow: 0rem 0rem 1rem #fff;
        font-weight: 400;
        color: #FFFFFF;
      }
      .filed::after {
          width: 16.33rem;
          height: 0.17rem;
          background: linear-gradient(90deg, rgba(0, 240, 255, 0));
        }
    }
    
    
}
</style>