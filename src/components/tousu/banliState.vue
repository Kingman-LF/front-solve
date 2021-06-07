<template>
    <div class="box myborder">
      <div class="title">
        <img :src="require('@/assets/images/titlelogo.png')" alt="" />
        <p>办理状态</p>
      </div>
      <div class="filed dis">
        <div class="num">办结已归档</div>
        <div class="number">8175</div>
      </div>
      <div class="in_hand dis">
        <div class="num">处理中</div>
        <div class="number">148</div>
      </div>
      <div class="coms dis">
        <div class="num">待办理</div>
        <div class="number">53</div>
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
      height: 10.5rem;
      position: relative;
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
      &:after{
        content: "";
        position: absolute;
        bottom: 0.08rem;
        width: 16.67rem;
        height: 0.08rem;
        background-image: url("~@/assets/images/fengxian/jx5.png");
        background-size: 100% 100%;
      }
      &:last-of-type:after{
        display: none;
      }
    }


}
</style>
