<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>信访总量</p>
    </div>
    <div class="c">
      <div class="total">
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
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "jagl"
}
</script>

<style lang="scss" scoped>
.myborder{
  height: 34.33rem;
  position: relative;
  .title{
    width: 16.08rem;
  }
  .c{
    width: 100%;
    height: 34.33rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #FFFFFF;
    font-family: "PingFang SC";
    font-weight: 400;
    .total{
      width: 40rem;
      height: 4.5rem;
      line-height: 4.5rem;
      margin:3.08rem auto 5.67rem;
      text-align: center;
      span{
        font-size: 3rem;
        &:last-of-type{
          margin-left: 1.67rem;
          font-size: 6rem;
          font-family: digifaw;
          font-weight: 400;
          text-shadow: 0.2rem 0rem 0.5rem #0096ff, -0.2rem 0rem 0.5rem #0096ff, 0rem 0.2rem 0.5rem #0096ff, 0rem -0.2rem 0.5rem #0096ff;
        }
      }
    }
    .area{
      display: flex;
      font-size: 2rem;
      font-family: "PingFang SC";
      font-weight: 400;
      margin:0 6rem;
      height: 10rem;
      .item{
        flex: 1;
        text-align: center;
      }
      p{
        font-family: "PingFang SC";
        font-weight: 400;
        &:first-of-type{
          font-family: digifaw;
          font-weight: 400;
          text-shadow: 0.2rem 0rem 0.5rem #0096ff, -0.2rem 0rem 0.5rem #0096ff, 0rem 0.2rem 0.5rem #0096ff, 0rem -0.2rem 0.5rem #0096ff;
          font-size: 3rem;
        }
      }
    }
  }
}
.gailan {
  margin-top: 1rem;
  display: flex;
  padding-left: 2.08rem;
  position: relative;
  justify-content: space-between;
  div {
    padding: 0rem 7.17rem 0rem 6rem;
    box-sizing: border-box;
    span {
      display: block;
      font-size: 2rem;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
      margin-bottom: 3.25rem;
      &:last-of-type{
        margin-bottom: 0;
      }
    }
  }
}
</style>
