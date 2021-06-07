<template>
  <div class="box">
    <div class="content">
      <div class="title">
        <img :src="require('@/assets/images/largeData/title.png')" />
      </div>
      <div class="earth">
        <img :src="require('@/assets/images/largeData/earth.gif')" />
      </div>
      <div class="list">
        <div class="item" style="left: 62.5rem; bottom: -2rem">
          <img :src="require('@/assets/images/largeData/ffjc.png')" />
        </div>
        <div class="item" style="bottom: 7rem; left: 20.5rem">
          <img :src="require('@/assets/images/largeData/qjgl.png')" />
        </div>
        <div class="item" style="bottom: 7rem; left: 104.5rem">
          <img :src="require('@/assets/images/largeData/pwd.png')" />
        </div>
        <div class="item" style="bottom: 30rem; left: 5.5rem">
          <img :src="require('@/assets/images/largeData/tsjg.png')" />
        </div>
        <div class="item" style="bottom: 30rem; left: 200.5rem">
          <img :src="require('@/assets/images/largeData/yyxt.png')" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 320rem;
  height: 90rem;
  background-image: url("~@/assets/images/largeData/bg.gif");
  background-size: cover;
}
.content {
  width: 140rem;
  height: 80rem;
  padding: 5rem 0;

  margin: 0 auto;
  position: relative;
}
.title {
  width: 140rem;
  height: 13rem;
  text-align: center;
}
.earth {
//   width: 140rem;
  height: 57rem;
  text-align: center;
//   transform:scale(1.49)
}
.title img {
  width: 112rem;
}
.earth img {
  width: 70rem;
}
.list {
  width: 140rem;
  height: 50rem;
  position: absolute;
  bottom: 5rem;
}
.item {
  position: absolute;
}
.item img {
  width: 15rem;
}
</style>
