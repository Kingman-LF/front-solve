<template>
  <div class="box myborder">
    <div class="lv">
      <div>
        <span>食品抽检总数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>药品检查总数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>产品抽查总数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>广告监测总数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>执法案件总数</span>
        <span>55782</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "numbers"
}
</script>

<style lang="scss" scoped>
.box{
  height: 12.75rem;
  @extend .flex-col;
  flex-direction: row;
  .lv {
    @extend .flex-row;
    div {
      @extend .flex-col;
      align-items: center;
      margin-top: 1.5rem;
      span {
        width: max-content;
      }
      span:nth-child(1) {
        line-height: 2.25rem;
        font-size: 2.5rem;
        font-family: PingFang SC;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
      }
      span:nth-child(2) {
        font-family: digifaw;
        line-height: 2.5rem;
        margin-top: 1.5rem;
        text-shadow: .2rem 0rem .5rem #0096ff,-.2rem 0rem .5rem #0096ff,0rem .2rem .5rem #0096ff,0rem -.2rem .5rem #0096ff;
        font-size: 4rem;
        font-weight: 400;
        color: #FFFFFF;
        text-shadow: 0rem 0rem 0rem #000000;
      
      }
    }
  }
}

</style>
