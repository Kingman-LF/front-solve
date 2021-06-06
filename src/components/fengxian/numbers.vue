<template>
  <!-- <el-row :gutter="12" class="box myborder">
    <el-col :span="4">
      
    </el-col>
    <el-col :span="4">
      <div class="Num">
        <p class="t">药品抽检数</p>
        <p class="n">55782</p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="Num">
        <p class="t">产品抽检数</p>
        <p class="n">55782</p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="Num">
        <p class="t">广告抽检数</p>
        <p class="n">55782</p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="Num">
        <p class="t">特种设备数</p>
        <p class="n">55782</p>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="Num">
        <p class="t">综合执法案</p>
        <p class="n">55782</p>
      </div>
    </el-col>
  </el-row> -->
  <div class="box myborder">
    <div class="lv">
      <div>
        <span>食品抽检数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>食品抽检数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>食品抽检数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>食品抽检数</span>
        <span>55782</span>
      </div>
    </div>
    <div class="lv">
      <div>
        <span>食品抽检数</span>
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
        font-size: 2.33rem;
        font-family: PingFang;
        font-weight: bold;
        font-style: italic;
        color: #ffffff;
        line-height: 2.25rem;
      }
      span:nth-child(2) {
        font-size: 2.71rem;
        font-family: digifaw;
        font-weight: 400;
        color: #ffffff;
        line-height: 2.5rem;
        margin-top: 1.5rem;
        text-shadow: .2rem 0rem .5rem #0096ff,-.2rem 0rem .5rem #0096ff,0rem .2rem .5rem #0096ff,0rem -.2rem .5rem #0096ff;
      }
    }
  }
}

</style>
