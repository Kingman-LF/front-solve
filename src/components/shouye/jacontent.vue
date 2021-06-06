<template>
  <div class="box">
    <div class="title">
      <img :src="require('@/assets/images/titlelogo.png')" alt="">
      <p>积案概览</p>
    </div>
    <div class="jacontent">
      <div class="item">
        <p class="jaTitle">标题:湖州某房地产公司延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金</p>
        <p class="jaInfo">内容分类:住房保障与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理</p>
        <div class="tips">
          <p>地区:吴兴区</p>
          <p>时间:2021-5-21 16:54:00</p>
        </div>
      </div>
      <div class="item">
        <p class="jaTitle">标题:湖州某房地产公司延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金</p>
        <p class="jaInfo">内容分类:住房保障与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理</p>
        <div class="tips">
          <p>地区:吴兴区</p>
          <p>时间:2021-5-21 16:54:00</p>
        </div>
      </div>
      <div class="item">
        <p class="jaTitle">标题:湖州某房地产公司延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金</p>
        <p class="jaInfo">内容分类:住房保障与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理</p>
        <div class="tips">
          <p>地区:吴兴区</p>
          <p>时间:2021-5-21 16:54:00</p>
        </div>
      </div>
      <div class="item">
        <p class="jaTitle">标题:湖州某房地产公司延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金延迟支付违约金</p>
        <p class="jaInfo">内容分类:住房保障与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理与房地产-房地产开发管理</p>
        <div class="tips">
          <p>地区:吴兴区</p>
          <p>时间:2021-5-21 16:54:00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  height: 49rem;
  .jacontent {
    height: 38rem;
    overflow: auto;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item{
      border-bottom: 2px solid;
      border-image: -webkit-linear-gradient(0deg, rgba(77, 163, 255, 0), #4da3ff, rgba(77, 163, 255, 0)) 0 0 1 0;
      color: #ffffff;
      font-size: 1.5rem;
      padding: 1.5rem 2.08em;
      cursor: pointer;
      font-family: PingFang Bold;
      p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 1;
        &.jaTitle{
          width: 28rem;
          margin-bottom: 2rem;
        }
        &.jaInfo{
          width: 31rem;
          margin-bottom: 2rem;
        }
      }
      .tips{
        display: flex;
        justify-content: space-between;
      }
      &:last-of-type{
        border-bottom: 0;
      }
      &:hover{
        //text-shadow: #0099ff 0 0 10px;
        //color: rgba(255,255,255,.9);
        color: #00f0ff;
      }
    }
  }
}
</style>
