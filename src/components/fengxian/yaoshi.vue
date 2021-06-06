<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>药师证即将到期预警</p>
    </div>
    <div class="yaoshi">
      <div class="yaof">
        <span>某药师</span>
        <span>某药房</span>
        <span>3天内</span>
      </div>
      <div class="yaof">
        <span>某药师</span>
        <span>某药房</span>
        <span>3天内</span>
      </div>
      <div class="yaof">
        <span>某药师</span>
        <span>某药房</span>
        <span>3天内</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "yaoshi"
}
</script>

<style lang="scss" scoped>
.yaoshi{
  height: 7.87rem;
  overflow: auto;
}
.yaof {
  width: 40rem;
  display: flex;
  padding-left: 4.33rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  line-height: 4rem;
  span {
    font-size: 1.5rem;
    font-family: PingFang;
    font-weight: bold;
    color: #ffffff;
  }
  span:last-child {
    color: #ff4a4a;
  }
  &:after{
    content: "";
    position: absolute;
    bottom: 0.08rem;
    width: 27.75rem;
    height: 0.08rem;
    margin-left: 4.33rem;
    background-image: url("~@/assets/images/fengxian/jx5.png");
    background-size: 100% 100%;
  }
  &:last-of-type:after{
    display: none;
  }
}
</style>
