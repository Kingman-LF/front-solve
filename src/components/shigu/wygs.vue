<template>
  <div class="box myborder">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>预警设备地区分布</p>
    </div>
    <div class="wy">
      <div class="wyList">
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字</div>
        </div>
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字物业公司的名字</div>
        </div>
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字</div>
        </div>
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字</div>
        </div>
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字</div>
        </div>
        <div class="wyItem d-flex">
          <div class="wyItemInfo">南浔区</div>
          <div class="wyItemInfo">625</div>
          <div class="wyItemInfo">物业公司的名字</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box{
height: 40rem;
.d-flex {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .wy {
    //width: 42rem;
    //height: 29rem;
    //margin-left: 1rem;
    //margin-top: 2rem;
  }
  .wyItem {
    height: 4.41rem;

    width: 100%;
    margin-bottom: 0.5rem;
    &:last-of-type{
      margin-bottom: 0;
    }
  }
  .wyItemInfo {
    width: 22.5rem;
    font-size: 1.5rem;
    font-family: PingFang Bold;
    line-height: 4.41rem;
    color: #ffffff;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
  
</style>
